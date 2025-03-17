regex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-z]{2,}$/;
function clientValidate(){
    let userMail = document.getElementById("emailBox").value;
    if(!(regex.test(userMail))){
        console.log("invalid");
    }
    else{
        console.log("valid")
    }
}