let data=[
    {image:"https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416",price:100,quantity:1, size:"M",color:"Navy Blue", name:"product dredd" },
    {image:"https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416",price:150,quantity:2, size:"M",color:"Army green",name:"product crecc"}
]

data.forEach((ele)=>{
let container=document.querySelector("#cart_datas")
let box=document.createElement("div");
box.setAttribute("class","box")
let left=document.createElement("div");
let right=document.createElement("div");
right.setAttribute("class","right")

let image=document.createElement("img");
image.src=ele.image;
let name=document.createElement("p");
name.innerText=ele.name;
let price_name=document.createElement("p");
price_name.innerText="name:"
let quantity_name=document.createElement("p");
quantity_name.innerText="quantity:"
let color_name=document.createElement("p");
color_name.innerText="color:"
let size_name=document.createElement("p");
size_name.innerText="size:"
let price_div=document.createElement("div");
let price=document.createElement("p")
price.innerText=ele.price;
let quantity_div=document.createElement("div");
let quantity=document.createElement("p")
quantity.innerText=ele.quantity;
let size_div=document.createElement("div");
let size=document.createElement("p")
size.innerText=ele.size;
let color_div=document.createElement("div");
let color=document.createElement("p")
color.innerText=ele.color;
let button=document.createElement("button");
button.innerText="View More"
left.append(image)
price_div.append(price_name,price)

quantity_div.append(quantity_name,quantity)

size_div.append(size_name,size)


color_div.append(color_name,color)

right.append(price_div,quantity_div,size_div,color_div)
box.append(left,right)
container.append(name,box,button)

});

function formData(event){
    event.preventDefault();
    console.log(agree.checked)
  if(agree.checked==true){


    let form =document.querySelector("#form");
    let fname=form.fname.value;
    let lname=form.lname.value;
    let country=form.country.value;
    let street=form.street.value;
    let pin=form.pin.value;
    let city=form.city.value;

    let data={
       names:`${fname} ${lname}`,
       street:street,
       city:`${city}, ${pin}`,
       country:country,
    }

    localStorage.setItem("address",JSON.stringify(data))
}
else{
    alert("Accept the terms and conditins")
}

}

