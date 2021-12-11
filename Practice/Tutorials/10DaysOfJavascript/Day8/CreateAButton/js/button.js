let button = document.createElement("button");
button.id = "btn";
button.innerHTML = 0;

button.onclick = () => {
    let number = Number.parseInt(button.innerHTML);

    button.innerHTML = ++number;
};

document.body.appendChild(button);
