const setToDo = () => {
    const main = document.querySelector('.to-do__main');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control form-control-lg';

    const addPlanBtn = document.createElement('button');
    addPlanBtn.textContent = 'Добавить в план';
    addPlanBtn.className = 'btn btn-danger';

    const addDoneBtn = document.createElement('button');
    addDoneBtn.textContent = 'Добавить в сделанные';
    addDoneBtn.className = 'btn btn-success';

    main.appendChild(input);
    main.appendChild(addPlanBtn);
    main.appendChild(addDoneBtn);

    const tasks = document.querySelector('.to-do__tasks');

    function addTask(text, type) {
        const task = document.createElement('span');
        task.textContent = text;
        task.dataset.type = type;
        task.addEventListener('click', () => {
            task.remove();
        });
        tasks.appendChild(task);
    }

    addPlanBtn.addEventListener('click', () => {
        if (input.value.trim()) {
            addTask(input.value.trim(), 'planned');
            input.value = '';
        }
    });

    addDoneBtn.addEventListener('click', () => {
        if (input.value.trim()) {
            addTask(input.value.trim(), 'completed');
            input.value = '';
        }
    });
};

export default setToDo;
