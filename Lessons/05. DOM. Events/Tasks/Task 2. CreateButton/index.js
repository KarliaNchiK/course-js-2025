const createButton = () => {
    const buttonContainer = document.querySelector('div.button-container');
    const descriptionConteiner = document.querySelector('div.description');

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Кнопка';

    button.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = 'Текст вставлен!';
        descriptionConteiner.appendChild(span);
    });

    buttonContainer.appendChild(button);
};

export default createButton;
