// let data=[
//     {imgUrl:"https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416",price:100,quantity:1, size:"M",color:"Navy Blue", name:"product dredd" },
//     {imgUrl:"https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416",price:150,quantity:2, size:"M",color:"Army green",name:"product crecc"}
// ]

let data1 = JSON.parse(localStorage.getItem("cartData"));
var sum;
displayData(data1)

function displayData(data) {
    sum = 0;

    data.forEach((ele) => {
        let container = document.querySelector("#cart_datas")
        let box = document.createElement("div");
        box.setAttribute("class", "box")
        let left = document.createElement("div");
        let right = document.createElement("div");
        right.setAttribute("class", "right")

        let image = document.createElement("img");
        image.src = ele.imgUrl;
        let name = document.createElement("p");
        name.innerText = ele.name;
        let price_name = document.createElement("p");
        price_name.innerText = "price:"
        let quantity_name = document.createElement("p");
        quantity_name.innerText = "quantity:"
        let color_name = document.createElement("p");
        color_name.innerText = "color:"
        let size_name = document.createElement("p");
        size_name.innerText = "size:"
        let price_div = document.createElement("div");
        let price = document.createElement("p")
        price.innerText = ele.strikePrice;
        sum = sum + (ele.price * ele.quantity);
        let quantity_div = document.createElement("div");
        let quantity = document.createElement("p")
        quantity.innerText = ele.quantity;
        let size_div = document.createElement("div");
        let size = document.createElement("p")
        size.innerText = ele.size;
        let color_div = document.createElement("div");
        let color = document.createElement("p")
        color.innerText = ele.color;
        let button = document.createElement("button");
        button.innerText = "View More"
        button.addEventListener("click", function () {
            openNav(ele)
        })
        left.append(image)
        price_div.append(price_name, price)

        quantity_div.append(quantity_name, quantity)

        size_div.append(size_name, size)


        color_div.append(color_name, color)

        right.append(price_div, quantity_div, size_div, color_div)
        box.append(left, right)
        container.append(name, box, button)

    });
    document.querySelector("#raw_total").innerText = sum;
    let ans = sum + 1710;
    document.querySelector("#total_price").innerText = ans;

}

function formData(event) {
    event.preventDefault();
    console.log(agree.checked)
    if (agree.checked == true) {


        let form = document.querySelector("#form");
        let fname = form.fname.value;
        let lname = form.lname.value;
        let country = form.country.value;
        let street = form.street.value;
        let pin = form.pin.value;
        let city = form.city.value;

        let data = {
            names: `${fname} ${lname}`,
            street: street,
            city: `${city}, ${pin}`,
            country: country,
        }

        localStorage.setItem("address", JSON.stringify(data))
        window.location.href = "last_step_payment.html"
    }
    else {
        alert("Accept the terms and conditins")
    }

}

function delivery() {
    let sd = document.querySelector("#standard-delivery").checked;
    let ed = document.querySelector("#express-delivery").checked;
    if (sd == true) {
        document.querySelector("#delivery_price").innerText = 1710.00;
        let ans = sum + 1710;
        document.querySelector("#total_price").innerText = ans;
    } else {
        document.querySelector("#delivery_price").innerText = 2052.00;
        let ans = sum + 2052;
        document.querySelector("#total_price").innerText = ans;
    }
}



function openNav(ele) {
    let container = document.querySelector(".overlay-content");
    container.innerHTML = null;
    let box = document.createElement("div")
    box.setAttribute("class", "box1")


    let image = document.createElement("img");
    image.src = ele.imgUrl;
    let name = document.createElement("p");
    name.innerText = ele.description;
    name.style.color = "black"



    container.append(image, name)
    // document.getElementById("myNav").style="block";
    document.getElementById("myNav").style.width = "70%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    // document.getElementById("myNav").style="none";
}

function backToCart() {
    window.location.href="cart.html"
}