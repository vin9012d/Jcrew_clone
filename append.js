let data=[
    {image:"https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416",price:100,quantity:1, size:"M",color:"Navy Blue", name:"product dredd" },
    {image:"https://www.jcrew.com/s7-img-facade/BI574_PT1317_m?wid=416",price:150,quantity:2, size:"M",color:"Army green",name:"product crecc"}
]

data.forEach((ele)=>{
let container=document.querySelector("#cart_datas")
let box=document.createElement("div");
let left=document.createElement("div");
let right=document.createElement("div");

let image=document.createElement("img");
image.src=ele.image;
let name=document.createElement("p");
name.innerText=ele.name;
let price=document.createElement("p")
price.innerText=ele.price;
let quantity=document.createElement("p")
quantity.innerText=ele.quantity;
let size=document.createElement("p")
size.innerText=ele.size;
let color=document.createElement("p")
color.innerText=ele.color;
let button=document.createElement("button");
button.innerText="View More"
left.append(image)
right.append(price,quantity,size,color)
box.append(left,right)
container.append(name,box,button)

})