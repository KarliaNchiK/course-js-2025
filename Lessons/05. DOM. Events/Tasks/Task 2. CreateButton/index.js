const createButton = () => {
    const firstElement = document.querySelector(".button-container");
    const myButton = document.createElement('button');
    myButton.className = "btn btn-primary";
    myButton.innerText = "Кнопка";
    firstElement.appendChild(myButton);

    const secondElement = document.querySelector(".description");


    myButton.addEventListener('click', (event) => {
        const mySpan = document.createElement('span');
        mySpan.innerText = "Текст вставлен!";
        secondElement.appendChild(mySpan);
    })
};

export default createButton;
