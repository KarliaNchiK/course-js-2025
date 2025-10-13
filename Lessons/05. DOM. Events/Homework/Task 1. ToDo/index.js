const setToDo = () => {
    // Начало

    const toDoMain = document.querySelector(".to-do__main");
    const toDoTasks = document.querySelector(".to-do__tasks");

    // поле ввода
    const input = document.createElement("input");
    input.type = "text";
    input.className = 'form-control form-control-lg';
    input.placeholder = 'Введите задачу...';

    //кнопка добавить в план
    const addPlannedButton = document.createElement('button');
    addPlannedButton.textContent = 'Добавить в план';
    addPlannedButton.className = ('btn btn-danger');


    //кнопка добавить в сделнанное
    const addCompletedButton = document.createElement('button');
    addCompletedButton.textContent = 'Добавить в сделанные';
    addCompletedButton.className = ('btn btn-success');

    toDoMain.appendChild(input);
    toDoMain.appendChild(addPlannedButton);
    toDoMain.appendChild(addCompletedButton);



    const addTasks = (type) => {
        const taskText = input.value.trim();

        if (taskText) {
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.dataset.type = type;


            taskSpan.addEventListener('click',  () => {
                taskSpan.remove();
            });

            toDoTasks.appendChild(taskSpan);
            input.value ='';
        }
    };

    addPlannedButton.addEventListener('click', () => addTasks('planned'));
    addCompletedButton.addEventListener('click', () => addTasks('completed'));
    // Конец
};

export default setToDo;