let buttons = document.querySelectorAll(".calc-row .button")
let calcDisplay = document.querySelector(".calc-display");
let calcTotal = document.querySelector(".calc-display-total");
let displayContent = "";
let clickNum;
let num1;
let num2;
let resultNum;
let opType;
let opHappened = false;1
let numEntered = true;

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});

document.addEventListener('keypress', buttonClick);

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

function buttonClick(e) {

    if (e.type === 'keypress') {
        clickNum = e.key;
    } else {
        clickNum = this.textContent;
    };


    if (clickNum.toUpperCase() === "C") {
        calcDisplay.textContent = "";
        calcTotal.textContent = "";
        opHappened = false;

    } else if (clickNum === "+") {

        addClick();

    } else if (clickNum === "-") {

        subtractClick();

    } else if (clickNum === "*") {

        multiplyClick();

    } else if (clickNum === "/") {

        divideClick();

    } else if (clickNum === "=") {

        equalClick();

    } else {


        if (/\d/.test(clickNum) === false) {
            calcDisplay.textContent += "";
            calcTotal.textContent += "";
            return;
        }

        2
        if (numEntered === false) { //checks to see if you've just hit an operator symbol
            calcDisplay.textContent = ""
            calcDisplay.textContent += clickNum;
            calcTotal.textContent += clickNum;

            numEntered = true;
        } else {
            calcDisplay.textContent += clickNum;
            calcTotal.textContent += clickNum;


            if (calcDisplay.textContent.length > 13) {
                alert('Number is too large');
                calcDisplay.textContent = "";
                calcTotal.textContent = "";
                num1 = "";
                num2 = "";
                opType = "";
                opHappened = false;
            };

            numEntered = true;
        };

    };
}

function addClick() {
    if (numEntered === false) {
        return;
    };
    if (opHappened === true) {

        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        calcTotal.textContent += " + ";
        opType = addNums;
        opHappened = true;
        numEntered = false;

    } else {

        num1 = calcDisplay.textContent;
        opType = addNums;
        calcTotal.textContent += " + ";
        opHappened = true;
        numEntered = false;
    };
}

function subtractClick() {
    if (numEntered === false) {
        return;
    };
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        calcTotal.textContent += " - ";
        opType = subtractNums;
        opHappened = true;
        numEntered = false;

    } else {

        num1 = calcDisplay.textContent;
        opType = subtractNums;
        calcTotal.textContent += " - ";
        opHappened = true;
        numEntered = false;
    };
}

function multiplyClick() {
    if (numEntered === false) {
        return;
    };
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        calcTotal.textContent += " * ";
        opType = multiplyNums;
        opHappened = true;
        numEntered = false;

    } else {

        num1 = calcDisplay.textContent;
        opType = multiplyNums;
        calcTotal.textContent += " * ";
        opHappened = true;
        numEntered = false;
    };
}

function divideClick() {
    if (numEntered === false) {
        return;
    };
    if (opHappened === true) {
        num1 = opType(num1, calcDisplay.textContent);
        calcDisplay.textContent = num1;
        calcTotal.textContent += " / ";
        opType = divideNums;
        opHappened = true;
        numEntered = false;

    } else {

        num1 = calcDisplay.textContent;
        opType = divideNums;
        calcTotal.textContent += " / ";
        opHappened = true;
        numEntered = false;
    };
}

function equalClick() {

    num2 = calcDisplay.textContent;
    resultNum = opType(num1, num2);

    if (resultNum === Infinity) {
        alert('You cannot divide a number by zero');
        calcDisplay.textContent = "";
        calcTotal.textContent = "";

    } else {
        calcDisplay.textContent = resultNum;
    };

    num1 = "";
    num2 = "";
    opType = "";
    opHappened = false;

}

//if num.legnth > 13