const setToDo = () => {
    // Находим основные блоки
    const main = document.querySelector('.to-do__main');
    const tasks = document.querySelector('.to-do__tasks');

    // Создаём поле ввода
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    input.classList.add('form-control', 'form-control-lg');

    // Создаём кнопки
    const planButton = document.createElement('button');
    planButton.textContent = 'Добавить в план';
    planButton.classList.add('btn', 'btn-danger');

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Добавить в сделанные';
    completedButton.classList.add('btn', 'btn-success');

    // Добавляем элементы в блок main
    main.append(input, planButton, completedButton);

    // Функция добавления задачи
    const addTask = (type) => {
        const value = input.value.trim();
        if (!value) return; // не добавляем пустое

        const span = document.createElement('span');
        span.textContent = value;
        span.dataset.type = type;

        // При клике по задаче — удалить
        span.addEventListener('click', () => {
            span.remove();
        });

        tasks.append(span);
        input.value = ''; // очищаем поле
    };

    // Обработчики кнопок
    planButton.addEventListener('click', () => addTask('planned'));
    completedButton.addEventListener('click', () => addTask('completed'));
};

export default setToDo;
