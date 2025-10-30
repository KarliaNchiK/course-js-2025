const createButton = () => {
    const firstElement = document.querySelector(".button-container");
    const secondElement = document.querySelector(".description");

    const myButton = document.createElement('button');
    myButton.className = "btn btn-primary";
    myButton.textContent = "Кнопка";
    firstElement.appendChild(myButton);


    myButton.addEventListener('click', (event) => {
        const existingSpan = secondElement.querySelector('span');
        if (existingSpan) {
            existingSpan.remove();
        }
        const mySpan = document.createElement('span');
        mySpan.textContent = "Текст вставлен!";
        secondElement.appendChild(mySpan);
    })
};

export default createButton;
