const createButton = () => {
    // Находим контейнер для кнопки
    const buttonContainer = document.querySelector('.button-container');

    // Создаём кнопку
    const button = document.createElement('button');

    // Добавляем классы и текст
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Кнопка';

    // Навешиваем обработчик клика
    button.addEventListener('click', () => {
        // Находим контейнер для описания
        const description = document.querySelector('.description');

        // Создаём элемент span
        const span = document.createElement('span');
        span.textContent = 'Текст вставлен!';

        // Вставляем span в .description
        description.appendChild(span);
    });

    // Вставляем кнопку в контейнер
    buttonContainer.appendChild(button);
};

export default createButton;
