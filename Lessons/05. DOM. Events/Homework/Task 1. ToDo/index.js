const setToDo = () => {
    const main = document.querySelector('.to-do__main');
    const tasksContainer = document.querySelector('.to-do__tasks');

    if (!main || !tasksContainer) return;

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form-control', 'form-control-lg');

    const btnPlan = document.createElement('button');
    btnPlan.textContent = 'Добавить в план';
    btnPlan.classList.add('btn', 'btn-danger');

    const btnDone = document.createElement('button');
    btnDone.textContent = 'Добавить в сделанные';
    btnDone.classList.add('btn', 'btn-success');

    main.append(input, btnPlan, btnDone);

    const addTask = (type) => {
        const text = input.value.trim();
        if (text === '') return;

        const span = document.createElement('span');
        span.textContent = text;
        span.dataset.type = type;

        span.addEventListener('click', () => {
            span.remove();
        });

        tasksContainer.appendChild(span);

        input.value = '';
    };

    btnPlan.addEventListener('click', () => addTask('planned'));
    btnDone.addEventListener('click', () => addTask('completed'));
};

export default setToDo;
