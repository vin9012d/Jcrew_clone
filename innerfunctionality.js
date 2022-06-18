//edit adress
function edit(){
    window.location.href="payment1.html"
}

//address apend
let addressData=JSON.parse(localStorage.getItem("address"));
document.querySelector("#name").innerText=addressData.names;

document.querySelector("#street").innerText=addressData.street;

document.querySelector("#city").innerText=addressData.city;
document.querySelector("#country").innerText=addressData.country;
//Paynow button click
function paynow(event){

event.preventDefault();

timer()
   let card_div=document.querySelector("#card_div");
   let otp=document.querySelector("#otp");
   card_div.style.display="none";
   otp.style.display="block";

   setTimeout(function(){
 alert("Your one time password OTP is 78665")
   },5000)
}

function resend(){
    setTimeout(function(){
        alert("Your one time password OTP is 78665")
          },5000)
}

//submit payment
function submit_otp(){
    let otp=document.querySelector("#enter_otp").value;
    if (otp == "78665") {
        let data1 = JSON.parse(localStorage.getItem("cartData"));
        data1 = null;
        localStorage.setItem("cartData", JSON.stringify(data1));
        alert(`
        Your order is placed sucessfully
        Now You will be redirected to the homepage`);
      window.location.href="index.html"
        
    }else
    alert(`You have entered wrong otp`)
}



//timer
function timer(){
    let min_container=document.querySelector("#timer_min")
    let sec_container=document.querySelector("#timer_seconds")
let min=2;
let sec=30;
min_container.innerText=min;
sec_container.innerText=sec;
    let id=setInterval(function(){
  sec=sec-1;
  if(min==0 && sec==0){
    alert("Your payment failed");
    window.location.hred="#";
    clearInterval(id)
    
 }
 if(sec==0){
    sec=60;
    min=min-1;
    min_container.innerText=min;
 }

 sec_container.innerText=sec;


    },1000)

}
