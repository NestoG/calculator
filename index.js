let firstOperand = null;
let operator;
let secondOperand = null;
let numCount = false;
let displayVariable = "";
let operandVariable = "";
let decimalUsed = false;

const screen = document.querySelector(".digits");


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        evaluateInput(button.id);
    })
})

function evaluateInput(keyid){
    if (keyid == "clear") {
        allClear();
    } else if (keyid == "/" || keyid == "*" || keyid == "-" || keyid == "+") {
        if(firstOperand == null) {
            newCalcSeq(keyid);
        } else {          
            calculate();
            firstOperand = displayVariable;
            operator = keyid;
        }                            
    } else if (keyid == "=") {
        calculate();
        firstOperand = null;
    } else if(keyid == "."){
        if(!decimalUsed){
            numberInput(keyid);
            decimalUsed = true;
        }
    } else if(keyid == "back"){
        removeDigit();
    } else {
        numberInput(keyid);
    }
    printText(displayVariable)
}


function newCalcSeq(key){
    firstOperand = displayVariable;
    operator = key;
    numCount = true;
}

function calculate() {
    if(checkForZeroDivision()){
        displayVariable = "ERROR";
    } else {
    let calc = operate(firstOperand, operator, displayVariable)
    calc = roundCalc(calc);
    displayVariable = calc;
    numCount = true;
    decimalUsed = false;
    disableDel();
    }
}

function disableDel(){
    document.getElementById("back").disabled = true;
}
function enableDel(){
    document.getElementById("back").disabled = false;
}

function checkForZeroDivision(){
    if(displayVariable == 0 && operator == "/"){
        return true;
    }
}

function numberInput(key) {
    enableDel();
    if (numCount == true) {
        displayVariable = "";
        numCount = false;
        console.log(numCount + key);
    }
    displayVariable += key;
}

function removeDigit(){
    console.log("The displayVariable is :" + displayVariable + " with a length of " + displayVariable.length);
    if (displayVariable.length > 0){
        displayVariable = displayVariable.slice(0,-1);
        console.log("dispVar is :" + displayVariable);
    }
}

function printText(disp){
    return screen.innerText = disp;
}

function allClear() {
    displayVariable = "";
    firstOperand = null;
    secondOperand = null;
    numCount == false;
    decimalUsed = false;
    enableDel();
}

function roundCalc(num) {
    return Math.round(num *1000) / 1000;
}

function operate(num1, oper, num2) {
    if (oper == "*") {
        return multiply(num1, num2);
    }
    if (oper == "+") {
        return add(num1, num2);
    }
    if (oper == "-") {
        return subtract(num1, num2);
    }
    if (oper == "/") {
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