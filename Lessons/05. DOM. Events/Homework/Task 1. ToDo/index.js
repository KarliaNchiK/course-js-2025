const setToDo = () => {
    const textBar = document.createElement('input');
    textBar.classList = 'form-control form-control-lg';
    textBar.placeholder = 'Введите наименование задачи';

    const buttonAddPlan = document.createElement('button');
    buttonAddPlan.classList = 'btn btn-danger';
    buttonAddPlan.textContent = 'Добавить в задачи';
    buttonAddPlan.addEventListener('click', () => {
        pushTask(textBar, 'planned');
    });

    const buttonAddComleted = document.createElement('button');
    buttonAddComleted.classList = 'btn btn-success';
    buttonAddComleted.textContent = 'Добавить в сделанные';
    buttonAddComleted.addEventListener('click', () => {
        pushTask(textBar, 'completed');
    })

    const mainToDO = document.querySelector('.to-do__main');
    mainToDO.appendChild(textBar);
    mainToDO.appendChild(buttonAddPlan);
    mainToDO.appendChild(buttonAddComleted);
};

const pushTask = (textBar, type) => {
    const textTask = textBar.value;
    const taskList = document.querySelector('.to-do__tasks');
    const span = document.createElement('span');
    span.textContent = `${textTask}`;
    span.dataset.type = type;

    span.addEventListener('click', () => {
        taskList.removeChild(span);
    });

    taskList.appendChild(span);
    textBar.value = '';
}

export default setToDo;