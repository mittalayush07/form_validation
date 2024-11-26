let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFields = document.querySelectorAll(".empty-field");
let firstName, lastName, email, password;
let field;
let nameRegex = /^[a-z]+$/i;
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
            break;
        case "lastName" :
            lastName = event.target.value;
            break;
        case "email":
            email = event.target.value;
            break;
        case "password":
            password = event.target.value;
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
            errorMessages[0].classList.remove("d-none");
        }
        else{
            errorMessages[0].classList.add("d-none");            
        }
        emptyFields[0].classList.add("d-none");
    }
    else{
        emptyFields[0].classList.remove("d-none");
    }
    if(lastName){
        if(!nameRegex.test(lastName)){
            errorMessages[1].classList.remove("d-none");
        }
        else{
            errorMessages[1].classList.add("d-none");            
        }
        emptyFields[1].classList.add("d-none");
    }
    else{
        emptyFields[1].classList.remove("d-none");
    }
})