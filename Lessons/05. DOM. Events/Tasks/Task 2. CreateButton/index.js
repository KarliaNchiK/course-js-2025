const createButton = () => {
    let buttonContainer = document.querySelector('div.button-container');
    let description = document.querySelector('div.description');
    let button = document.createElement('button');
    button.className = 'btn';
    button.textContent = 'Кнопка';

    buttonContainer.append(button);
    button.addEventListener('click', () => {
        let span = document.createElement('span');
        span.textContent = 'Текст вставлен!';
        description.append(span);
    })
};
export default createButton;
