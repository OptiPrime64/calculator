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

function addNums(num1, num2) {
    return num1 + num2;
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