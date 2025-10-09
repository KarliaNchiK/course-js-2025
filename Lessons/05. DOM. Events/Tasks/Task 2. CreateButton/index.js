const createButton = () => {
    const buttonContainer = document.querySelector('.button-container');
    const descriptionContainer = document.querySelector('.description');

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Кнопка';

    button.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = 'Текст вставлен!';

        descriptionContainer.innerHTML = '';
        descriptionContainer.appendChild(span);
    });

    buttonContainer.appendChild(button);
};

export default createButton;
