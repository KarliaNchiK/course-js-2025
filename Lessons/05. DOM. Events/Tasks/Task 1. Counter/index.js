const setCounter = () => {
    let counter = 0;
    const mainDiv = document.querySelector(".main");
    const button = document.createElement("button");
    const text = "Количество нажатий:"
    button.classList.add("btn", "btn-warning");
    button.textContent = `${text} ${counter}`;
    button.addEventListener("click", () => {
        counter++;
        button.textContent = `${text} ${counter}`;
    });
    mainDiv.appendChild(button);
};

export default setCounter;
