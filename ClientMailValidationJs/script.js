regex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-z]{2,}$/;
errorMessage = document.getElementById("errorMessage");

function clientValidate(){
    let userMail = document.getElementById("emailBox").value;
    if(!(regex.test(userMail))){
        errorMessage.innerHTML = "Enter a Valid Email Id";
        errorMessage.style.color = "red";
    }
    else{
        errorMessage.innerHTML = "Valid";
        errorMessage.style.color = "green";
        console.log("valid")
    }
}