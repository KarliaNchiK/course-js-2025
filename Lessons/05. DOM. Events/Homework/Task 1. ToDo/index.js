const setToDo = () => {
    const main = document.querySelector('.to-do__main');

    //Создаю главные элементы 
    const inputSpace = document.createElement('input');
    const addTaskButton = document.createElement('button');
    const addToFinishedButton = document.createElement('button');

    //Настраиваю Input
    inputSpace.dataset.type = 'text';

    //Настраиваю кнопки
    addTaskButton.textContent = 'Добавить в план';
    addToFinishedButton.textContent = 'Добавить в сделанные';

    //Добавляю обработчики
    addTaskButton.addEventListener('click', () => {
        addTask(inputSpace.value);
        inputSpace.value = '';
    });
    addToFinishedButton.addEventListener('click', () => {
        addToFinished(inputSpace.value);
        inputSpace.value = '';
    });

    /*main.appendChild(inputSpace);
    main.appendChild(addTaskButton);
    main.appendChild(addToFinishedButton);*/

    main.append(inputSpace, addTaskButton, addToFinishedButton);

};

const addTask = (text) => {
    const container = document.querySelector('.to-do__tasks');
    const task = document.createElement('span');
    task.dataset.type = 'planned';
    task.textContent = text;

    task.addEventListener('click', () => {
            task.outerHTML = '';
        });

    container.appendChild(task);
};

const addToFinished = (text) => {
    const container = document.querySelector('.to-do__tasks');
    const task = document.createElement('span');
    task.dataset.type = 'completed';
    task.textContent = text;

    task.addEventListener('click', () => {
            task.remove();
        });

    container.appendChild(task);
};

export default setToDo;