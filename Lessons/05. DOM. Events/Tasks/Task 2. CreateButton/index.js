const createButton = () => {
    const containerButton = document.querySelector('.button-container');
    const containerDescription = document.querySelector('.description');
    const button = document.createElement('button');
    button.textContent = 'Кнопка';
    button.classes = 'btn, btn-primary';
    containerButton.appendChild(button);
    button.addEventListener('click', () => {
        const text = document.createElement('span');
        text.textContent = 'Текст вставлен!';
        containerDescription.appendChild(text);
    });
};

export default createButton;
