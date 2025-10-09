const addToDo = (type, text) => {
    const tasksContainer = document.querySelector('.to-do__tasks');
    if (text.length > 0) {
        const newSpan = document.createElement('span');
        newSpan.dataset.type = type;
        newSpan.textContent = text;
        newSpan.addEventListener('click', () => {
            newSpan.remove();
        });
        tasksContainer.appendChild(newSpan);
    }
};

const setToDo = () => {
    const mainContainer = document.querySelector('.to-do__main');

    const input = document.createElement('input');
    input.placeholder = 'Введите наименование задачи';

    const plannedButton = document.createElement('button');
    plannedButton.textContent = 'Добавить в план';

    const completedButton = document.createElement('button');
    completedButton.textContent = 'Добавить в сделанные';

    mainContainer.appendChild(input);
    mainContainer.appendChild(plannedButton);
    mainContainer.appendChild(completedButton);

    plannedButton.addEventListener('click', () => {
        addToDo('planned', input.value);
        input.value = '';
    });
    completedButton.addEventListener('click', () => {
        addToDo('completed', input.value);
        input.value = '';
    });
};

export default setToDo;