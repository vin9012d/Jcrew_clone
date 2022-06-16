let obj = JSON.parse(localStorage.getItem("product_detail"));

let prod_type = obj.category;
console.log(prod_type)
document.getElementById("product_image").src = obj.imgUrl
document.getElementById("product_name").innerText = obj.name
document.getElementById("product_price").innerText = "Rs. "+  obj.price
document.getElementById("Striked_price").innerText = "Rs. " + obj.strikePrice
if(obj.discount==undefined){
    document.getElementById("discount").innerText = ""
}else{
    document.getElementById("discount").innerText = obj.discount
}

document.getElementById("description").innerText = obj.description

let size = document.getElementById("size").children;
for(let el of size){
    el.addEventListener("click",function(){
        let x = el.innerText;
        document.getElementById("size_type").innerText = "Size : " + x;
        obj.size = x;
    })
}


let colour = document.getElementById("color").children;

for(var i = 0 ; i<colour.length ; i++){

    if(i==0){
        colour[i].addEventListener("click",function(){
            obj.color = "green"
            document.getElementById("color_type").innerText = "Color : green "
        })
    }else if(i==1){
        colour[i].addEventListener("click",function(){
            obj.color = "red"
            document.getElementById("color_type").innerText = "Color : red "
        })
    }else if(i==2){
        colour[i].addEventListener("click",function(){
            obj.color = "teal"
            document.getElementById("color_type").innerText = "Color : teal "
        })
    }else if(i==3){
        colour[i].addEventListener("click",function(){
            obj.color = "black"
            document.getElementById("color_type").innerText = "Color : black "
        })
    }else if(i==4){
        colour[i].addEventListener("click",function(){
            document.getElementById("color_type").innerText = "Color : orange "
            obj.color = "orange"
        })
    }else{
        colour[i].addEventListener("click",function(){  
            obj.color = "yellow" 
            document.getElementById("color_type").innerText = "Color : yellow "
        })
    }
    
   
}

let cartArr = JSON.parse(localStorage.getItem("cartData")) || [] ;

document.getElementById("checkout").addEventListener("click",function(){
   let qua =  document.getElementById("quantity").value;
     
    obj.quantity = qua;

    cartArr.push(obj)
    document.getElementById("cartlist_count").innerText = cartArr.length;
    localStorage.setItem("cartData",JSON.stringify(cartArr))
})



let appendSame = (arr) => {
    document.getElementById("same_category").innerHTML = null

    arr.forEach(function(el){
    
        let card = document.createElement("div");
    
        let image = document.createElement("img");
        image.src = el.imgUrl;
        image.addEventListener("click",function(){
            card.style.border = "1px solid black"
            window.location.href = "productpage.html";
            localStorage.setItem("product_detail",JSON.stringify(el))
        })
    
        let name = document.createElement("p");
        name.innerText = el.name;
        name.style.fontWeight = "bold"
    
        let price_div = document.createElement("div")
        price_div.style.fontWeight = "bold"
        price_div.style.display = "flex";
        price_div.style.width = "70%"
        price_div.style.justifyContent = "space-between";

        let stprice = document.createElement("p");
        stprice.style.fontWeight = "bold"
        stprice.innerText = "INR: " + el.price;
        stprice.style.textDecoration = "line-through";

        let price = document.createElement("p");
        price.innerText = "INR: " + el.strikePrice;
        price.style.color = "red";

        price_div.append(stprice,price)
    
        card.append(image,name,price_div)
    
        document.getElementById("same_category").append(card)
    });
}

if(prod_type=="women"){
    let arrW = JSON.parse(localStorage.getItem("womenArr"));
    appendSame(arrW);   
}else if(prod_type=="men"){
    let arrM = JSON.parse(localStorage.getItem("Man"));
    appendSame(arrM)
}else{
    let kidS = JSON.parse(localStorage.getItem("kids"));
    appendSame(kidS)
}


