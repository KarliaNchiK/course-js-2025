const setToDo = () => {
    // 1. добавление в блок 5 элементов (находим основные блоки)
    const main = document.querySelector('.to-do__main');
    const tasks = document.querySelector('.to-do__tasks');

    // cоздаём поле ввода
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите наименование задачи';
    input.classList.add('form-control', 'form-control-lg');

    // cоздаём кнопки
    const planButton = document.createElement('button');
    planButton.textContent = 'Добавить в план';
    planButton.classList.add('btn', 'btn-danger');

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Добавить в сделанные';
    completedButton.classList.add('btn', 'btn-success');

    // добавляем элементы в блок main
    main.append(input, planButton, completedButton);

    // 2. функция добавления задачи
    const addTask = (type) => {
        const value = input.value.trim();
        if (!value) return; // не добавляем пустое

        const span = document.createElement('span');
        span.textContent = value;
        span.dataset.type = type;

        // при клике по задаче = удалить ее
        span.addEventListener('click', () => {
            span.remove();
        });

        tasks.append(span);
        input.value = ''; // очищаем поле
    };

    // обработчики кнопок
    planButton.addEventListener('click', () => addTask('planned'));
    completedButton.addEventListener('click', () => addTask('completed'));
};

export default setToDo;
