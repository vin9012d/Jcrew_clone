//let product_data = JSON.parse(localStorage.getItem("product"));


let obj = {
    "imgUrl": "https://www.jcrew.com/s7-img-facade/N4290_BR0968?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
    "name": "Girls' Childrenchic® leather sandals in glitter",
    "description": "Handcrafted in Spain using premium materials, every style in this sweet children's shoe collection is kid-tested and approved by the founders' own little ones, no less (talk about standing behind your brand). These Menorquina-style sandals were meant for everyday summer joy. In premium soft-shimmer leather with easy hook-and-loop straps for a comfy fit. The sturdy, ridged rubber soles add extra support for strolling, skipping and garden picking. They will be her go-to accessory for cute dresses and twirly skirts.",
    "discount": "",
    "price": "",
    "strikePrice": "89.90",
    "type": "shoes",
    "category": "kids",
    "id": 18
  };

document.getElementById("product_image").src = obj.imgUrl
document.getElementById("product_name").innerText = obj.name
document.getElementById("product_price").innerText =  "Rs.  1000"
document.getElementById("Striked_price").innerText = "Rs. " + obj.strikePrice
document.getElementById("discount").innerText = obj.discount
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

let cartArr = []

document.getElementById("checkout").addEventListener("click",function(){
   let qua =  document.getElementById("quantity").value;
     
    obj.quantity = qua;

    cartArr.push(obj)
    localStorage.setItem("cart",JSON.stringify(cartArr))
})