const setCounter = () => {
    const mainElement = document.querySelector('.main'); // Находим элемент .main
    let count = 0; // Инициализируем счетчик

    // 1. создаем кнопку
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary'); // Классы для кнопки
    button.textContent = `Количество нажатий: ${count}`;

    // 2. обработчик нажатия на кнопку + счетчик
    button.addEventListener('click', () => {
        count++;
        button.textContent = `Количество нажатий: ${count}`; // обновляем текст кнопки

        // 3. если счетчик >= 3, меняем класс кнопки
        if (count >= 3) {
            button.classList.remove('btn-primary'); // yбираем старый класс
            button.classList.add('btn-warning'); // добавляем новый класс
        }
    });

    // вставляем кнопку в .main
    mainElement.appendChild(button);
};

export default setCounter;
