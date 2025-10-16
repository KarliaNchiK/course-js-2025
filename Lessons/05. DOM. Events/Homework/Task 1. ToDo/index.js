const setToDo = () => {
    // Начало
    const toDOContainer = document.querySelector('.to-do');
    const toDoHeader = document.querySelector('.to-do__header');
    const toDoMain = document.querySelector('.to-do__main');
    const toDoTasks = document.querySelector('.to-do__tasks');

    const input = document.createElement('input');
    input.classList.add('form-control', 'form-control-lg');
    input.dataset.type = 'text';
    input.placeholder = 'Введите текст:';

    const buttonPlan = document.createElement('button');
    buttonPlan.classList.add('btn', 'btn-danger');
    buttonPlan.textContent = 'Добавить в план';

    const buttonCompl = document.createElement('button');
    buttonCompl.classList.add('btn', 'btn-success');
    buttonCompl.textContent = 'Добавить в сделанные';

    buttonCompl.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.dataset.type = 'completed';
        toDoTasks.appendChild(span);
        input.value = '';
    });

    buttonPlan.addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input.value;
        span.dataset.type = 'planned';
        toDoTasks.appendChild(span);
        input.value = '';
    });
    toDoTasks.onclick = (e) => e.target.tagName === 'SPAN' && e.target.remove();

    // for (let i = 0; i <= spans.length; i += 1) {
    //     spans.addEventListener('click', () => {
    //         spans[i].textContent = '';
    //     });
    // }

    toDoMain.appendChild(input);
    toDoMain.appendChild(buttonPlan);
    toDoMain.appendChild(buttonCompl);
    toDOContainer.appendChild(toDoHeader);
    toDOContainer.appendChild(toDoMain);
    toDOContainer.appendChild(toDoTasks);
    // Конец
};

export default setToDo;