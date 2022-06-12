const numbers = document.querySelectorAll(".number");
const displayCurrent = document.getElementById("current");
const displayResult = document.getElementById("result");
const operators = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const decimalBtn = document.getElementById("decimal");
document.getElementById("current").style.height = "100px";
document.getElementById("current").style.margin = "0px 10px";
document.getElementById("result").style.margin = "0px 5px";


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
    if (a === 0 || b === 0) {
        return "ʕ •`ᴥ•´ʔ no"
    }
    return a / b;
};

const operate = function (a, operator, b) {
    const operators = {
        " + ": (a, b) => add(Number(a), Number(b)),
        " - ": (a, b) => subtract(Number(a), Number(b)),
        " × ": (a, b) => multiply(Number(a), Number(b)),
        " ÷ ": (a, b) => divide(Number(a), Number(b))
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
        currentNum += number.value;
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
            // If second operand is no longer being updated reset.
            currentNum = "";
        }
        savedOperator = operator.value;
        updateCurrentLine();
    });
}

function doCalcAction() {
    result = operate(firstNum, savedOperator, secondNum);
    firstNum = result;
    secondNum = "";
    currentNum = "";
}

equalsBtn.addEventListener("click", () => {
    if (secondNum !== "" && savedOperator !== "") {
        /*Checks if data [2 + 2] is not empty then run function
        if empty dont run.
        */
        doCalcAction();
        updateResultLine();
    } else {
    }
})

clearBtn.addEventListener("click", () => {
    displayCurrent.textContent = "0";
    displayResult.textContent = "0";
})

deleteBtn.addEventListener("click", () => {
    currentNum = Number(currentNum.toString().slice(0, -1))
    displayCurrent.textContent = currentNum;
})
