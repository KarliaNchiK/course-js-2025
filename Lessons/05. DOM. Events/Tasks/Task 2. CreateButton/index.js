const createButton = () => {
    // 1. добавление кнопки (находим контейнер для кнопки)
    const buttonContainer = document.querySelector('.button-container');

    // создаём кнопку
    const button = document.createElement('button');

    // добавляем классы и текст
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Кнопка';

    // 2. навешиваем обработчик клика
    button.addEventListener('click', () => {
        // находим контейнер для описания
        const description = document.querySelector('.description');

        // создаём элемент span
        const span = document.createElement('span');
        span.textContent = 'Текст вставлен!';

        // вставляем span в .description
        description.appendChild(span);
    });

    // вставляем кнопку в контейнер
    buttonContainer.appendChild(button);
};

export default createButton;
