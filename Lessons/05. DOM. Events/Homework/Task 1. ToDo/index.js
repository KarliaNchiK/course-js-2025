const setToDo = () => {
    const main = document.querySelector('.to-do__main');
    const tasks = document.querySelector('.to-do__tasks');
    
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.className = 'form-control form-control-lg';
    textField.placeholder = 'Введите задачу';
    
    const button1 = document.createElement('button');
    button1.className = 'btn btn-danger';
    button1.textContent = 'Добавить в план';
    button1.dataset.type = 'planned';
    
    const button2 = document.createElement('button');
    button2.className = 'btn btn-success';
    button2.textContent = 'Добавить в сделанные';
    button2.dataset.type = 'completed';
    
    main.append(textField, button1, button2);
    
    main.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            const type = e.target.dataset.type;
            const text = textField.value.trim();
            
            if (text) {
                const task = document.createElement('span');
                task.textContent = text;
                task.dataset.type = type;
                
                
                task.className = 'task';
                
                if (type === 'planned') {
                    task.style.color = 'red';
                } else if (type === 'completed') {
                    task.style.color = 'green';
                    task.style.textDecoration = 'line-through';
                }
                
                tasks.appendChild(task);
                textField.value = '';
            }
        }
    });
    
    tasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('task')) {
            e.target.remove();
        }
    });
};

export default setToDo