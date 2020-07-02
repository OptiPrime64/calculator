let buttons = document.querySelectorAll(".calc-row .button")
let calcDisplay = document.querySelector(".calc-display");
let displayContent = "";
let clickNum;
let num1;
let num2;
let resultNum;
let opType;

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});


//Primary operate function

function operate(operator, operand1, operand2) {
    if (operator === 'add') {
        return addNums(operand1, operand2);
    };
    if (operator === 'subtract') {
        return subtractNums(operand1, operand2);
    };
    if (operator === 'multiply') {
        return multiplyNums(operand1, operand2);
    };
    if (operator === 'divide') {
        return divideNums(operand1, operand2);
    };
}


// Math functions

function addNums(num1, num2) {
    return +num1 + +num2;
}

function subtractNums(num1, num2) {
    return num1 - num2;
}

function multiplyNums(num1, num2) {
    return num1 * num2;
}

function divideNums(num1, num2) {
    return num1 / num2;
}


//Display Function

function buttonClick() {
    clickNum = this.textContent;

    if (clickNum === "C") {
        calcDisplay.textContent = "";

    } else if (clickNum === "+") {
        num1 = calcDisplay.textContent;
        console.log(num1);
        calcDisplay.textContent = ""
        opType = addNums;

    } else if (clickNum === "-") {
        num1 = calcDisplay.textContent;
        console.log(num1);
        calcDisplay.textContent = ""
        opType = subtractNums;

    }else if (clickNum === "*") {
        num1 = calcDisplay.textContent;
        console.log(num1);
        calcDisplay.textContent = ""
        opType = multiplyNums;

    }else if (clickNum === "/") {
        num1 = calcDisplay.textContent;
        console.log(num1);
        calcDisplay.textContent = ""
        opType = divideNums;

    }else if (clickNum === "="){
        num2 = calcDisplay.textContent;
        resultNum = opType(num1, num2);
        calcDisplay.textContent = resultNum;
        num1 = "";
        num2 = "";
        opType = "";

    } else {
        calcDisplay.textContent += clickNum;
    };
}
