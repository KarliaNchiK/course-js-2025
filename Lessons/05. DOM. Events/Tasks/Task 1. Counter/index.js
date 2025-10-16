const setCounter = () => {
    const mainElement = document.querySelector('.main'); // Находим элемент .main
    let count = 0; // Инициализируем счетчик

    // Создаем кнопку
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary'); // Классы для кнопки
    button.textContent = `Количество нажатий: ${count}`;

    // Обработчик нажатия на кнопку
    button.addEventListener('click', () => {
        count++; // Увеличиваем счетчик на 1
        button.textContent = `Количество нажатий: ${count}`; // Обновляем текст кнопки

        // Если счетчик больше или равен 3, меняем класс кнопки
        if (count >= 3) {
            button.classList.remove('btn-primary'); // Убираем старый класс
            button.classList.add('btn-warning'); // Добавляем новый класс
        }
    });

    // Вставляем кнопку в .main
    mainElement.appendChild(button);
};

export default setCounter;
