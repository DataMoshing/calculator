const numbers = document.querySelectorAll(".number");
const displayCurrent = document.getElementById("current");
const displayResult = document.getElementById("result");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equal");
document.getElementById("current").style.height = "100px";
document.getElementById("current").style.margin = "0px 10px";

let currentNum = "";
let firstNum = "0";
let savedOperator = "";
let secondNum = "";
let result = "";

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const operate = function (a, operator, b) {
    const operators = {
        " + ": (a, b) => add(Number(a), Number(b)),
        " - ": (a, b) => subtract(Number(a), Number(b)),
        " * ": (a, b) => multiply(Number(a), Number(b)),
        " / ": (a, b) => divide(Number(a), Number(b))
    };
    return operators[operator](a, b);
};

function updateCurrentLine() {
    displayCurrent.textContent = firstNum + savedOperator + secondNum;
}

updateCurrentLine();

function updateResultLine() {
    displayResult.textContent = result;
}

for (const number of numbers) {
    number.addEventListener("click", () => {
        // Storing first number/numbers that is input
        currentNum += number.value;
        console.log('currentNum', currentNum);

        if (!savedOperator) {
            firstNum = currentNum;
        } else {
            secondNum = currentNum;
        }

        updateCurrentLine();
    });
}

for (const operator of operators) {
    operator.addEventListener("click", () => {
        if (!savedOperator) {
            savedOperator = operator.value;
        }

        if (secondNum) {
            doCalcAction();
            updateResultLine();
        } else {
            currentNum = "";
        }

        savedOperator = operator.value;
        updateCurrentLine();
    });
}

function doCalcAction() {
    result = operate(firstNum, savedOperator, secondNum);
    console.log(result);

    firstNum = result;
    secondNum = "";
    currentNum = "";
}

equals.addEventListener('click', () => {
    if (secondNum !== "" && savedOperator !== "") {
        console.log('ready!')
        doCalcAction();
        updateResultLine();
    } else {
    }
})
