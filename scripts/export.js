function displayProduct(array,box,arrayFav){
    
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
        //here 
        let check = JSON.parse(localStorage.getItem("favItem")) || [];
        
        if(check.length !== 0){
            check.forEach((elem)=>{
                if(elem.id == el.id){
                    itag.setAttribute("class","fa-solid fa-heart fa-lg");
                    strike = !strike;
                }
            })
        }
        
        // till here
        heart.append(itag);
        heart.addEventListener("click",()=>{
            
            if(strike){
                itag.setAttribute("class","fa-solid fa-heart fa-lg");

                wishlist(el,arrayFav,strike)
                //this will going to add element to the wishlist
                strike = !strike;
               
            
            }
            else{
                itag.setAttribute("class","fa-regular fa-heart fa-lg")

                wishlist(el,arrayFav,strike)
                //this will going to delete the element which is meant to be deleted
                strike = !strike;
                
    
            }
            
        })
        
        let title = create("p");//name of product
        title.innerText = el.name;


        let img = create("img")//image of product

        //Added-----------------------------------------------------
        img.addEventListener("click",function(){
            window.location.href = "productpage.html";
            localStorage.setItem("product_detail",JSON.stringify(el))
        })
       // Added-----------------------------------------------------

        img.src = el.imgUrl;
        let price= create("span");//price of product
        price.innerText = " INR "+el.strikePrice;
        price.style.color = "#da2a2a"
        let stkPrice = create("span")
        stkPrice.innerText = "INR "+el.price;//strike price of product
        stkPrice.style.textDecoration = "line-through";
        

        divone.append(heart,img,title,stkPrice,price)//appending item object keys value inside a div called divone
        divone.addEventListener("click",()=>{
            let item = el;
            localStorage.setItem("showMe",JSON.stringify(item));
        })

        box.append(divone);//appending divone to the div product div of html

    });
}

function create(arg){
    return document.createElement(arg);
}
function wishlist(arg,arrayFav,stk){
    if(stk == true){
        arrayFav.push(arg);
        
        document.getElementById("wishlist_count").innerHTML = arrayFav.length
        localStorage.setItem("favItem",JSON.stringify(arrayFav));

        
    }
    else{
        let favArr = JSON.parse(localStorage.getItem("favItem"));;
                let spl;
                for(let i=0;i<favArr.length;i++){
                    if(favArr[i].name == arg.name){
                        spl = i;
                    }
                }
            arrayFav.splice(spl,1);
            document.getElementById("wishlist_count").innerHTML = arrayFav.length
            
            localStorage.setItem("favItem",JSON.stringify(arrayFav));;
    }
    
}

export {displayProduct,create,wishlist};