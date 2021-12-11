let div = document.createElement("div");
div.id = "btns";

let buttons = [];
for (let i = 0; i < 9; i++) {
    let button = document.createElement("button");
    button.id = `btn${i + 1}`;
    button.innerHTML = i + 1;

    buttons.push(button);
}

buttons[4].onclick = () => {
    let numbers = buttons.map(button => button.innerHTML);

    buttons[0].innerHTML = numbers[3];
    buttons[1].innerHTML = numbers[0];
    buttons[2].innerHTML = numbers[1];
    buttons[3].innerHTML = numbers[6];
    buttons[5].innerHTML = numbers[2];
    buttons[6].innerHTML = numbers[7];
    buttons[7].innerHTML = numbers[8];
    buttons[8].innerHTML = numbers[5];
};

buttons.forEach(button => div.appendChild(button));

document.body.appendChild(div);
