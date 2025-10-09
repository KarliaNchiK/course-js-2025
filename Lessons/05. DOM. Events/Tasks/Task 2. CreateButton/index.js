const createButton = () => {
    const containerForButton = document.querySelector('.button-container');

    const containerForDescription = document.querySelector('.description');

    const button = document.createElement('button');
    button.textContent = 'Кнопка';
    containerForButton.appendChild(button);

    button.addEventListener('click', () => {
        const description = document.createElement('span');
        description.textContent = 'Текст вставлен!';
        containerForDescription.appendChild(description);
    });
};

export default createButton;
