const createButton = () => {
  const buttonContainer = document.querySelector(".button-container");
  const description = document.querySelector(".description");

  if (!buttonContainer || !description) return;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Кнопка";

  button.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = "Текст вставлен!";

    description.appendChild(span);
  });
  
  buttonContainer.appendChild(button);
};

export default createButton;
