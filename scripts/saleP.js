let arr = JSON.parse(localStorage.getItem("sale"));

let productBox = document.getElementById("products_append")


displayProduct(arr,productBox);

function displayProduct(array,box){
    
    box.innerHTML = null;
    

    function create(arg){
        return document.createElement(arg);
    }
    array.forEach((el) => {
        let divone = create("div");

        let heart = create("span");
        
        let itag = create("i");// i tag to get favorite icon
        itag.setAttribute("class","fa-regular fa-heart fa-lg")
        let strike = true;
        

        heart.append(itag);
        heart.addEventListener("click",()=>{
            if(strike){
                itag.setAttribute("class","fa-solid fa-heart fa-lg");
                strike = !strike;
            }
            else{
                itag.setAttribute("class","fa-regular fa-heart fa-lg")
                strike = !strike;
            }
            
        })
        
        let title = create("p");//name of product
        title.innerText = el.name;
        let img = create("img")//image of product
        img.src = el.imgUrl;

        //Added-----------------------------------------------------
        img.addEventListener("click",function(){
            window.location.href = "productpage.html";
            localStorage.setItem("product_detail",JSON.stringify(el))
        })
       // Added-----------------------------------------------------
        let price= create("span");//price of product
        price.innerText = " INR "+el.strikePrice ;
        price.style.color = "#da2a2a"

        let off = create("span")
        off.innerText = " "+`(${el.off}% off)`;
        off.style.color = "#767676";

        let stkPrice = create("span")
        stkPrice.innerText = "INR "+el.price;//strike price of product
        stkPrice.style.textDecoration = "line-through";

        let offPara = create("p");
        offPara.innerText = `EXTRA ${el.off}% OFF SALE STYLES + EXTRA 10% OFF YOUR PURCHASE WITH CODE SHOPNOW`
        offPara.setAttribute("id","offPara")
        offPara.style.fontWeight = "900";
        offPara.style.fontSize = "10px";
        

        divone.append(heart,img,title,stkPrice,price,off,offPara)//appending item object keys value inside a div called divone
        divone.addEventListener("click",()=>{
            let item = el;
            console.log("hello")
            localStorage.setItem("showMe",JSON.stringify(item));
        })

        box.append(divone);//appending divone to the div product div of html

    });
}

attireFilter = ()=>{
    //console.log("hello")//check if function is working or not
    let selected = document.getElementById("filter").value;
    if(selected=="usual"){//if this statement went true it will going to display data in their usal order
        displayProduct(arr,productBox);
        return;
    }
    let filterData = arr.filter((el)=>{
        return el.type == selected;
    })
    displayProduct(filterData,productBox);
}

sorting = ()=>{
    let selected = document.getElementById("sorting").value;
    if(selected == "LTH"){//This statement will going to sort by Low to High price
        arr.sort((a,b)=>{
            let x =+a.price;
            let y =+b.price;
            if(x>y){
                return 1;
            }
            else if(y>x){
                return -1;
            }
            else{
                return 0;
            }
        })
        displayProduct(arr,productBox);
    }
    if(selected == "HTL"){//This function will going to sort by High to Low price
        arr.sort((a,b)=>{
            let x =+a.price;
            let y =+b.price;
            if(x>y){
                return -1;
            }
            else if(y>x){
                return 1;
            }
            else{
                return 0;
            }
        })
        displayProduct(arr,productBox);
    }
    if(selected == "usual"){
        displayProduct(arr,productBox);//this will going to bring products in their usual order
    }

}