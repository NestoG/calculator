let firstOperand;
let operator;
let secondOperand;
let numCount = false;

const screen = document.querySelector(".screen");
let displayVariable="";
let operandVariable="";

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == "clear") {
            displayVariable = "";
        } else if(button.id == "/" ||button.id == "*" || button.id == "-" || button.id == "+") {
            operator = button.id;
            firstOperand = displayVariable;
            numCount = true;
        } else if(button.id == "="){
            secondOperand = displayVariable;
            let calc = operate(firstOperand, operator, secondOperand)
            displayVariable = calc;
        } else {
            if(numCount == true){
                displayVariable = "";
                numCount == false;
            }
        displayVariable += button.id;
        }
        screen.innerText =displayVariable;
    })
})


function operate(num1, oper, num2){
    if(oper == "*") {
        return multiply(num1, num2);
    }
    if(oper == "+") {
        return add(num1, num2);
    }
    if(oper == "-") {
        return subtract(num1, num2);
    }
    if(oper == "/") {
        return divide(num1, num2);
    }
}


function multiply(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}