
let num1 = 0
let num2 = 0
let operation = null
let result = null
power = 0






display = document.getElementById("display")

displayNum1 = document.getElementById("num1")

displaySymbol = document.getElementById("operation")

displayNum2 = document.getElementById("num2")







calculation = {
    "+":(a,b)=>{return a+b},
    "-":(a,b)=>{return a-b},
    "/":(a,b)=>{return a/b},
    "*":(a,b)=>{return a*b}
}

function postNumberClick(event){

    element = event.target

    if (element.classList.contains("item-clear")){
        num1 = 0
        num2 = 0
        operation = null
        result = null

        displayNum1.innerText = num1
        displayNum2.style.display = "none"
        displaySymbol.style.display = "none"

    }





    if (result==null){

        if (operation==null){
            if (element.classList.contains("item-number")){
                num1 = (num1*10) + Number(element.textContent )
                displayNum1.innerText = num1
                console.log("num1",num1)
            }
            else if ( element.classList.contains("item-symbol")){
                operation = element.textContent
                displaySymbol.style.display = "block"

                displaySymbol.innerText=operation
                console.log(displaySymbol.style.visibilty)
                console.log(num1,operation)
            }

        }
        else{

            if (element.classList.contains("item-number")){
                num2 = (num2*10) + Number(element.textContent )
                displayNum2.style.display = "block"
                displayNum2.innerText=num2

            }
            else if ( element.classList.contains("item-symbol")){
                operation = element.textContent
                displaySymbol.innerText=operation
                displaySymbol.style.display = "block"

            }
            else if(element.classList.contains("item-equal")){
                result = calculation[operation](num1,num2) 
                num1 = result

                displayNum1.innerText = num1
                displayNum2.style.display = "none"
                displaySymbol.style.display = "none"
                num2 = 0
                power=0
            }


        }

    }
    else{

        if (element.classList.contains("item-number")){

            num2 = (num2*10) + Number(element.textContent )
            displayNum2.innerText=num2
            displayNum2.style.display = "block"

            power+=1
    
        }
    
        else if ( element.classList.contains("item-symbol")){
            operation = element.textContent
            displaySymbol.innerText=operation
            displaySymbol.style.display = "block"
            power=0
        }
        else if(element.classList.contains("item-equal")){
            result = calculation[operation](num1,num2) 
            num1 = result

            displayNum1.innerText = num1
            displayNum2.style.display = "none"
            displaySymbol.style.display = "none"
            num2 = 0
        }


    }


}


document.getElementById("calculator").addEventListener('click',postNumberClick)
