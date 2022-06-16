let obj = JSON.parse(localStorage.getItem("product_detail"));


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

let cartArr = JSON.parse(localStorage.getItem("cartData")) || [] ;

document.getElementById("checkout").addEventListener("click",function(){
   let qua =  document.getElementById("quantity").value;
     
    obj.quantity = qua;

    cartArr.push(obj)
    localStorage.setItem("cartData",JSON.stringify(cartArr))
})