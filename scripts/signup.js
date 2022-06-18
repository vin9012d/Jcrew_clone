let signupNow = () => {
    document.querySelector("#signup-outer").style.display = "flex";
    document.querySelector("body").style.overflowY = "hidden";

}
// document.querySelector("#hello").addEventListener("click",signupNow);



// make forgot password popup and change popup to forgot password
let mainDiv;
let changePassword = () => {
    document.querySelector("#signup-form").style.display = "none";
    if(mainDiv){
       mainDiv.style.display = "block";
    } else {
    mainDiv = document.createElement("div");
    let forgetHeading = document.createElement("h3");
    forgetHeading.innerText = "Forgot Password";
    let newpass = document.createElement("input");
    newpass.placeholder = "New Password";
    newpass.type = "text";
    let confirm = document.createElement("input");
    confirm.placeholder = "Confirm Password";
    confirm.type = "text";
    let changeBtn = document.createElement("button");
    changeBtn.innerText = "Change Password";
    let backIcon = document.createElement("i");
    backIcon.setAttribute("class","fa-solid fa-angle-left");
    backIcon.setAttribute("id","backBtn");
    backIcon.addEventListener("click",function(){
        back(mainDiv);
    })
    mainDiv.append(forgetHeading,newpass,confirm,changeBtn,backIcon);
    mainDiv.setAttribute("id" , "forgetPass");
    document.querySelector("#signup-outer").append(mainDiv);
    }
}
document.querySelector("#passwordForget").addEventListener("click",changePassword);



//Close popup

let closeModal = () => {
    document.querySelector("#signup-outer").style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
}
document.querySelector(".fa-xmark").addEventListener("click",closeModal);



// back Button at Forgot Password

let back = (mainDiv) => {
    document.querySelector("#signup-form").style.display = "block";
    mainDiv.style.display = "none";
}


// make signup popup and change popup to signup

let outerDiv;
let newUser = () => {
    document.querySelector("#signup-form").style.display = "none";
    if(outerDiv){
        outerDiv.style.display = "block";
    } else {
    outerDiv = document.createElement("div");
    let signUpHeading = document.createElement("h3");
    signUpHeading.innerText = "SignUp";
    let fillName = document.createElement("input");
    fillName.placeholder = "Full Name";
    fillName.type = "text";
    let fillEmail = document.createElement("input");
    fillEmail.placeholder = "Email Address";
    fillEmail.type = "text";
    let fillPassword = document.createElement("input");
    fillPassword.placeholder = "Password";
    fillPassword.type = "text";
    let createAcc = document.createElement("button");
    createAcc.innerText = "Create Account";
    createAcc.setAttribute("id","createNewUser");
    createAcc.addEventListener("click",function(){
        newAccount(fillName,fillPassword,fillEmail);
        
    });
    let backIcon = document.createElement("i");
    backIcon.setAttribute("class","fa-solid fa-angle-left");
    backIcon.setAttribute("id","backBtn");
    backIcon.addEventListener("click",function(){
        back(outerDiv);
    })
    outerDiv.append(signUpHeading,fillName,fillEmail,fillPassword,createAcc,backIcon);
    outerDiv.setAttribute("id" , "createAcc");
    document.querySelector("#signup-outer").append(outerDiv);
    }
}
document.querySelector("#SignUp").addEventListener("click",newUser);



//password show-hide

let changeType = () => {
    let icon = document.querySelector("#password-sec > div > i");
    if(icon.getAttribute("class") === "fa-solid fa-eye-slash") {
        icon.setAttribute("class","fa-solid fa-eye");
        document.querySelector("#signin-password").setAttribute("type" , "text");
    } else {
        icon.setAttribute("class","fa-solid fa-eye-slash");
        document.querySelector("#signin-password").setAttribute("type" , "password");
    }
}
document.querySelector("#password-sec > div > i").addEventListener("click",changeType);



// saving user data in local Storage
let signupData = JSON.parse(localStorage.getItem("signupData")) || [];
let newAccount = (fillName,fillPassword,fillEmail) => {
    let haveAcc = false;
    if(fillPassword.value !== "" && fillName.value !== "" && fillEmail.value !== "") {
        for(let a = 0; a < signupData.length; a++){
            console.log("red");
            if(fillEmail.value === signupData[a].email){
                haveAcc = true;
            }
        }
        if(haveAcc === true){
            alert("Account Already Exists");
        } else {
        if(fillPassword.value.length >= 8){
        let singleUser = {
            name : fillName.value,
            email : fillEmail.value,
            password : fillPassword.value
        }
        signupData.push(singleUser);
        alert("SignUp Successful!"); //// changed
        fillName.value = "";///
        fillEmail.value = "";///
        fillPassword.value = "";//
        localStorage.setItem("signupData",JSON.stringify(signupData));
        } else {
        alert("Password must be atleast of 8 characters");
        }
     }
    } else {
        alert("All the fields are required");
    }
}

//signIn
let login = () => {
    let password = document.querySelector("#signin-password");
    let email = document.querySelector("#signin-email");
    let haveAcc = false;
    if(password.value !== "" && email.value !== ""){
        for(let a = 0; a < signupData.length; a++){
            if(signupData[a].email === email.value && signupData[a].password === password.value){
                haveAcc = true;
            } else if(signupData[a].email === email.value){
                haveAcc = "onlyEmail";
            }
        }
        if(haveAcc === true){
            let signinData = localStorage.getItem("signinData") || {};
            let SigninEmail = email.value;
            let SigninPassword = password.value;
            signinData = {
                email : SigninEmail,
                password : SigninPassword
            }
            localStorage.setItem("signinData",JSON.stringify(signinData));
            alert("SignIn Successful");
            closeModal();
            signupData.forEach((elem) => {
                if(elem.email === signinData.email){
                    document.querySelector("#LoginSignUp").innerText = elem.name;
                    let username = elem.name;
                    localStorage.setItem("username" , username);
                }
            });
        } else if(haveAcc === "onlyEmail"){
            alert("Password Does Not Match");
        } else {
            alert("No Account Found");
        }
    } else {
        alert("All the fields are required");
    }
}
document.querySelector("#SignIn").addEventListener("click",login);