let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFields = document.querySelectorAll(".empty-field");
let showPwdButton = document.querySelector(".btn");

let firstName, lastName, email, password;
let fnTarget, lnTarget, emTarget, pwdTarget;
let field;
let fnFlag, lnFlag, emFlag, pwdFlag;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}
for(let emptyField of emptyFields){
    emptyField.classList.add("d-none");
}

formData.addEventListener("keyup", (event)=>{
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = event.target.value;
            fnTarget = event.target;
            break;
        case "lastName" :
            lastName = event.target.value;
            lnTarget = event.target;
            break;
        case "email":
            email = event.target.value;
            emTarget = event.target;
            break;
        case "password":
            password = event.target.value;
            pwdTarget = event.target;
            break;
        default:
            firstName = secondName = email = password = "";
            break;                 
    }
})

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if(firstName){
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none");
            fnFlag = false;
        }
        else{
            fnTarget.classList.remove("error");
            errorMessages[0].classList.add("d-none"); 
            fnFlag = true;           
        }
        emptyFields[0].classList.add("d-none");
    }
    else{
        emptyFields[0].classList.remove("d-none");
    }
    if(lastName){
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none");
            lnFlag = false;
        }
        else{
            lnTarget.classList.remove("error");
            errorMessages[1].classList.add("d-none");   
            lnFlag = true;         
        }
        emptyFields[1].classList.add("d-none");
    }
    else{
        emptyFields[1].classList.remove("d-none");
    }
    if(email){
        if(!emailRegex.test(email)){
            emTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none");
            emFlag = false;
        }
        else{
            emTarget.classList.remove("error");
            errorMessages[2].classList.add("d-none"); 
            emFlag = true;
        }
        emptyFields[2].classList.add("d-none");

    }
    else{
        emptyFields[2].classList.remove("d-none");
    }
    if(password){
        if(!passwordRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none");
            pwdFlag = false;
        }
        else{
            pwdTarget.classList.remove("error");
            errorMessages[3].classList.add("d-none");   
            pwdFlag = true;         
        }
        emptyFields[3].classList.add("d-none");
    }
    else{
        emptyFields[3].classList.remove("d-none");
    }
    if(fnFlag && lnFlag && emFlag && pwdFlag){
        fnTarget.value = lnTarget.value = emTarget.value = pwdTarget.value = "";
        window.location.href = "/success.html"
    }

})

showPwdButton.addEventListener("click", (event)=>{
    event.preventDefault();
    if(pwdTarget.getAttribute("type") === "text"){
        pwdTarget.setAttribute("type", "password");
    }
    else{
        pwdTarget.setAttribute("type", "text");
    }
})