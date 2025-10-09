const setToDo = () => {
    // Начало
    const mainBlock = document.querySelector('.to-do__main');
    if (mainBlock.children.length > 0) {
        return;
    }
    const tasksBlock = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control form-control-lg';

    const plannedButton = document.createElement('button');
    plannedButton.textContent = 'Добавить в план';
    plannedButton.className = 'btn btn-danger';

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Добавить в сделанные';
    completedButton.className = 'btn btn-success';

    mainBlock.appendChild(input);
    mainBlock.appendChild(plannedButton);
    mainBlock.appendChild(completedButton);

    const addTask = (type) => {
        const taskText = input.value.trim();

        if (taskText) {
            const task = document.createElement('span');
            task.textContent = taskText;
            task.dataset.type = type;

            task.addEventListener('click', function () {
                this.remove();
            });
            tasksBlock.appendChild(task);
            input.value = '';
        }
    };

    plannedButton.addEventListener('click', () => {
        addTask('planned');
    });

    completedButton.addEventListener('click', () => {
        addTask('completed');
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask('planned');
        }
    });
    // Конец
};
document.addEventListener('DOMContentLoaded', setToDo);

export default setToDo;