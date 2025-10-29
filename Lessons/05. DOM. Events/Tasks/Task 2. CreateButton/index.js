const createButton = () => {
    const buttonContainer = document.querySelector('.button-container');
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Кнопка';
    buttonContainer.appendChild(button);
    
    button.addEventListener('click', () => {
        if(button.classList.contains('btn-primary')){
            createDescription();
            button.classList.remove('btn-primary');
        }
    });
};

const createDescription = () => {
    const descriptionContainer = document.querySelector('.description');
    const description = document.createElement('span');
    description.textContent = 'Текст вставлен!';
    descriptionContainer.appendChild(description);
};

export default createButton;
