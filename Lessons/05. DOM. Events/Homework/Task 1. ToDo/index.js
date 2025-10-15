const setToDo = () => {

    let toDoMain = document.querySelector('.to-do__main');

    let input = document.createElement("input");
    input.classList.add('form-control-lg');
    input.classList.add('form-control');
    input.type = 'text';
    toDoMain.appendChild(input);

    let addToPlanBtn = document.createElement('button');
    addToPlanBtn.classList.add('btn');
    addToPlanBtn.classList.add('btn-danger');
    addToPlanBtn.textContent = 'Добавить в план';
    toDoMain.appendChild(addToPlanBtn);

    let addToDoneBtn = document.createElement('button');
    addToDoneBtn.classList.add('btn');
    addToDoneBtn.classList.add('btn-success');
    addToDoneBtn.textContent = 'Добавить в сделанные';
    toDoMain.appendChild(addToDoneBtn);

    let toDoList = document.querySelector('.to-do__tasks');

    let createTask = (type) => {
        let task = document.createElement('span');
        let inputValue = document.querySelector('.form-control').value;
        task.textContent = inputValue;
        task.setAttribute('data-type', type);

        toDoList.append(task);
        input.value = '';

        task.addEventListener('click', function() {
            this.remove();
        })
    }
    addToPlanBtn.addEventListener('click', () => {
        createTask('planned');
    })
    addToDoneBtn.addEventListener('click', () => {
        createTask('completed');
    })
};

export default setToDo;