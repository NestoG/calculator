// Initalize variables
let firstOperand = null;
let operator;
let secondOperand = null;
let numCount = false;
let displayVariable = "";
let operandVariable = "";
let decimalUsed = false;
const screen = document.querySelector(".digits");
const buttons = document.querySelectorAll('button');

// Add event listeners to the keypad buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        evaluateInput(button.id);
    })
})

// Main function to process button clicks
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


// Calculate using two operands and an operator
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

// Variable initialization when a first operand hasn't been set
function newCalcSeq(key){
    firstOperand = displayVariable;
    operator = key;
    numCount = true;
}

// Disable the delete/backspace button
function disableDel(){
    document.getElementById("back").disabled = true;
}
// Enable the delete/backspace button
function enableDel(){
    document.getElementById("back").disabled = false;
}

// Check to see if user is dividing by zero
function checkForZeroDivision(){
    if(displayVariable == 0 && operator == "/"){
        return true;
    }
}

// Update displayVariable with user input of numbers or decimal
function numberInput(key) {
    enableDel();
    if (numCount == true) {
        displayVariable = "";
        numCount = false;
        console.log(numCount + key);
    }
    displayVariable += key;
}

// Delete/Backspace function
function removeDigit(){
    if (displayVariable.length > 0){
        displayVariable = displayVariable.slice(0,-1);
    }
}

// Print input to screen
function printText(disp){
    return screen.innerText = disp;
}

// Clear (AC) function
function allClear() {
    displayVariable = "";
    firstOperand = null;
    secondOperand = null;
    numCount == false;
    decimalUsed = false;
    enableDel();
}

// Round to three decimals
function roundCalc(num) {
    return Math.round(num *100000) / 100000;
}

// Hub to direct data into correct math function
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


// MATH FUNCTIONS

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