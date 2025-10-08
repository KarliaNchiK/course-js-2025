const createButton = () => {

    const buttonContainer = document.querySelector('.button-container');
    const descriptionContainer = document.querySelector('.description');
    const button = document.createElement("button");

    button.textContent = "Кнопка";
    button.className = "btn btn-primary";

    buttonContainer.append(button);

    const spanElement = document.createElement('span');

    descriptionContainer.appendChild(spanElement);
    const handleClick = () => {


        spanElement.textContent = 'Текст вставлен!';



    }

    button.addEventListener("click",handleClick);



};

export default createButton;
