let firstOperand;
let operator;
let secondOperand;


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
    if(oper == "*") {
        return divide(num1, num2);
    }
}


function multiply(num1, num2) {
    return num1 * num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}