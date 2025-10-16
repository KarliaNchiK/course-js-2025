const setCounter = () => {
  const main = document.querySelector(".main");
  if (!main) return;

  const button = document.createElement("button");
  button.classList.add("btn", "btn-warning");

  let count = 0;

  button.textContent = `Количество нажатий: ${count}`;

  button.addEventListener("click", () => {
    count++;
    button.textContent = `Количество нажатий: ${count}`;
  });

  main.appendChild(button);
};

export default setCounter;
