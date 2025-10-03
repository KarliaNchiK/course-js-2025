const setCounter = () => {
    let counter = 0;
    const mainDiv = document.querySelector(".main");
    const button = document.createElement("button");
    button.classList.add("btn", "btn-warning");
    button.textContent = "Количество нажатий: 0";
    button.addEventListener("click", () => {
        counter++;
        button.textContent = `Количество нажатий: ${counter}`;
    });
    mainDiv.appendChild(button);
};

export default setCounter;
