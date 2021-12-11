let result  = document.createElement("div");
result.id = "res";

let buttons = document.createElement("div");
buttons.id = "btns";

let button0 = document.createElement("button");
button0.id = "btn0";
button0.innerHTML = "0";

let button1 = document.createElement("button");
button1.id = "btn1";
button1.innerHTML = "1";

let buttonClear = document.createElement("button");
buttonClear.id = "btnClr";
buttonClear.innerHTML = "C";

let buttonEqual = document.createElement("button");
buttonEqual.id = "btnEql";
buttonEqual.innerHTML = "=";

let buttonPlus = document.createElement("button");
buttonPlus.id = "btnSum";
buttonPlus.innerHTML = "+";

let buttonMinus = document.createElement("button");
buttonMinus.id = "btnSub";
buttonMinus.innerHTML = "-";

let buttonStar = document.createElement("button");
buttonStar.id = "btnMul";
buttonStar.innerHTML = "*";

let buttonSlash = document.createElement("button");
buttonSlash.id = "btnDiv";
buttonSlash.innerHTML = "/";

button0.onclick = () => {
    result.innerHTML += "0";
};

button1.onclick = () => {
    result.innerHTML += "1";
};

buttonPlus.onclick = () => {
    result.innerHTML += "+";
};

buttonMinus.onclick = () => {
    result.innerHTML += "-";
};

buttonStar.onclick = () => {
    result.innerHTML += "*";
};

buttonSlash.onclick = () => {
    result.innerHTML += "/";
};

buttonClear.onclick = () => {
    result.innerHTML = "";
}

buttonEqual.onclick = () => {
    let match = result.innerHTML.match(/(\d+)([\+\-\*\/])(\d+)/);

    let operand1 = Number.parseInt(match[1], 2);
    let operand2 = Number.parseInt(match[3], 2);
    let operator = match[2];

    let getResult = (operand1, operand2, operator) => {
        switch (operator) {
            case "+":
                return operand1 + operand2;
            case "-":
                return operand1 - operand2;
            case "*":
                return operand1 * operand2;
            case "/":
                return operand1 / operand2;
            default:
                return null;
        }
    }

    result.innerHTML = getResult(operand1, operand2, operator).toString(2);
};

buttons.appendChild(button0);
buttons.appendChild(button1);
buttons.appendChild(buttonClear);
buttons.appendChild(buttonEqual);
buttons.appendChild(buttonPlus);
buttons.appendChild(buttonMinus);
buttons.appendChild(buttonStar);
buttons.appendChild(buttonSlash);

document.body.appendChild(result);
document.body.appendChild(buttons);
