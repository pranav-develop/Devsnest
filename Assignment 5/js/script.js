//jshint esversion: 8
/*---------handlers-----------*/
let prevVal = null;
let operation = "";
let currentVal = "";

function handleOperation(operand) {
    switch (operand) {
        case "%":
            preformPercent();
            break;
        case "=":
            performOperation();
            prevVal = null;
            operation = "";
            break;
        default:
            performOperation();
    }
    if (operand !== "=") operation = operand;
    else operation = "";
    updateCalc();
}

function handleChange(change) {
    switch (change) {
        case "dl":
            delLast();
            break;
        case "r":
            resetValue();
            break;
        default:
            changeValue(change);
    }
}

function setCurrVal() {
    document.querySelector(".display .currVal").textContent = currentVal;
}

function setPrevVal() {
    document.querySelector(".display .prevVal .number").textContent = prevVal;
}

function setOperation() {
    document.querySelector(".display .prevVal .operation").textContent = operation;
}

function updateCalc() {
    setCurrVal();
    setPrevVal();
    setOperation();
}

function resetValue() {
    currentVal = "";
    prevVal = null;
    operation = "";
    updateCalc();
}

function delLast() {
    currentVal = currentVal.slice(0, -1);
    setCurrVal();
}

function changeValue(letter) {
    if (currentVal === "0") currentVal = letter;
    else currentVal += letter;
    setCurrVal();
}

function performOperation() {
    if (prevVal === null) {
        prevVal = currentVal;
        currentVal = "0";
        return;
    }
    console.log("mai jaa rah" + operation);
    let temp1 = parseFloat(prevVal);
    let temp2 = parseFloat(currentVal);
    let temp3 = 0;
    switch (operation) {
        case "+":
            console.log("add");
            temp3 = temp1 + temp2;
            break;
        case "-":
            console.log("sub");
            temp3 = temp1 - temp2;
            break;
        case "*":
            console.log("mul");
            temp3 = temp1 * temp2;
            break;
        case "/":
            console.log("div");
            temp = temp1 / temp2;
            break;
        default:
            console.log("marao");
    }
    prevVal = temp3.toString();
    currentVal = "0";
    return;
}
