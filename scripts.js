let buttons = document.querySelectorAll(".calc-row .button")
let calcDisplay = document.querySelector(".calc-display");
let displayContent = "";
let clickNum;
let num1;
let num2;
let resultNum;
let opType;
let opHappened = false;
let numEntered = false;

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

        addClick();

    } else if (clickNum === "-") {

        subtractClick();

    } else if (clickNum === "*") {

        multiplyClick();

    } else if (clickNum === "/") {

        divideClick();

    } else if (clickNum === "=") {
        num2 = calcDisplay.textContent;
        resultNum = opType(num1, num2);
        calcDisplay.textContent = resultNum;
        num1 = "";
        num2 = "";
        opType = "";
        opHappened = false;

    } else {
        if (opHappened === true || numEntered === false) {
            calcDisplay.textContent = ""
            calcDisplay.textContent += clickNum;
            numEntered = true;
        } else {
            calcDisplay.textContent += clickNum;
            numEntered = true;
        };

    };
}

function addClick() {
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        opType = addNums;
        opHappened = true;

    } else {
        num1 = calcDisplay.textContent;
        opType = addNums;
        opHappened = true;
    };
}

function subtractClick() {
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        opType = subtractNums;
        opHappened = true;

    } else {
        num1 = calcDisplay.textContent;
        opType = subtractNums;
        opHappened = true;
    };
}

function multiplyClick() {
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        opType = multiplyNums;
        opHappened = true;

    } else {
        num1 = calcDisplay.textContent;
        opType = multiplyNums;
        opHappened = true;
    };
}

function divideClick() {
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        opType = divideNums;
        opHappened = true;

    } else {
        num1 = calcDisplay.textContent;
        opType = divideNums;
        opHappened = true;
    };
}
