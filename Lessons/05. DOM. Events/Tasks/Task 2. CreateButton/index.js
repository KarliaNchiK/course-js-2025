const createButton = () => {
    let btn = document.createElement("button");
    btn.className = 'btn btn-primary';
    btn.textContent = 'Кнопка';

    let btnContainer = document.querySelector('div.button-container');
    let description = document.querySelector('div.description');

    btnContainer.append(btn);
    btn.addEventListener('click', () => {
        let span = document.createElement("span");
        span.textContent = 'Текст вставлен!';

        description.append(span);
    })
};

export default createButton;
