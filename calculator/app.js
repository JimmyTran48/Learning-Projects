function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    if (!n2) {
        return "You must have a lot of free time on your hands";
    }
    return n1 / n2;
}

function operate(operator, n1, n2) {
    return operator(n1, n2);
}

let operator;
let num1;
let num2;
let dummy = "";
let cont = true;
let display = document.querySelector("h1");

let numbers = document.querySelectorAll(".numbers");

function updateDisplay(e) {
    let num = e.target.value;
    if (!dummy) {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
    dummy += num;

    if (cont) {
        num1 = parseInt(dummy);
    } else {
        num2 = parseInt(dummy);
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", updateDisplay);
}

let operators = document.querySelectorAll(".operators");

function updateOperator(e) {
    if (num2) {
        display.innerText = operate(operator, num1, num2);
        num1 = operate(operator, num1, num2);
        dummy = "";
    } else {
        dummy = "";
        display.innerText = 0;
    }

    let operation = e.target.value;
    switch (operation) {
        case "add":
            operator = add;
            break;
        case "subtract":
            operator = subtract;
            break;
        case "multiply":
            operator = multiply;
            break;
        case "divide":
            operator = divide;
            break;
    }

    cont = false;
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", updateOperator);
}

let equalSign = document.querySelector(".operate");

equalSign.addEventListener("click", () => {
    if (!operator) {
    } else {
        display.innerText = operate(operator, num1, num2);
        num1 = operate(operator, num1, num2);
        dummy = "";
    }
});

let clearBtn = document.querySelector(".clear");

function clear() {
    operator = "";
    num1 = "";
    num2 = "";
    dummy = "";
    display.innerText = "CLEAR";
    cont = true;
}

clearBtn.addEventListener("click", clear);
