const createButton = () => {
    const buttonContainer = document.querySelector(".button-container");
    const description = document.querySelector(".description");

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Кнопка";
    buttonContainer.appendChild(button);
    button.addEventListener("click", () => {
        const span = document.createElement("span");
        span.textContent = "Текст вставлен!";
        description.appendChild(span);
    });
};

export default createButton;
