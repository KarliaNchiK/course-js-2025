const setToDo = () => {
    const mainBlock = document.querySelector('.to-do__main');
    const tasksBlock = document.querySelector('.to-do__tasks');

    const inputField = document.createElement('input');
    inputField.type = 'text';

    const planButton = document.createElement('button');
    planButton.textContent = 'Добавить в план';
    planButton.classList.add('btn', 'btn-danger');

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Добавить в сделанные';
    doneButton.classList.add('btn', 'btn-success');

    mainBlock.appendChild(inputField);
    mainBlock.appendChild(planButton);
    mainBlock.appendChild(doneButton);

    function createNewTask(taskType) {
        const taskText = inputField.value.trim();

        if (taskText === '') return;

        const taskElement = document.createElement('span');
        taskElement.textContent = taskText;
        taskElement.dataset.type = taskType;
        tasksBlock.appendChild(taskElement);
        inputField.value = '';
        taskElement.addEventListener('click', function() { this.remove(); });
    }

    planButton.addEventListener('click', function() {
        createNewTask('planned');
    });

    doneButton.addEventListener('click', function() {
        createNewTask('completed');
    });
};

export default setToDo;