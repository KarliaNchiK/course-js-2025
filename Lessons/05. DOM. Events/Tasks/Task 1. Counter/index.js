const setCounter = () => {
    let count = 0;
    const mainContainer = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = `Количество нажатий: ${count}`;
    mainContainer.appendChild(button);
    
    button.addEventListener('click', () => {
        count++;
        button.textContent = "Количество нажатий: " + count;
    });
};

export default setCounter;
