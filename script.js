const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (a, operator, b) {
    const operators = {
        "+": (a, b) => add(a, b),
        "-": (a, b) => subtract(a, b),
        "*": (a, b) => multiply(a, b),
        "/": (a, b) => divide(a, b),
    }
    return operators[operator](a, b);
}

// console.log(operate(3, "*", 7))