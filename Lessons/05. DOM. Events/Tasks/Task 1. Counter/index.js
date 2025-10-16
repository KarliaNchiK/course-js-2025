const setCounter = () => {
    let count = 0;
    const container = document.querySelector('.main');
    const button = document.createElement('button');
    button.textContent = `Количество нажатий: ${count}`;
    button.addEventListener('click', () => {
        count += 1;
        button.textContent = `Количество нажатий: ${count}`;
    });
    container.appendChild(button);
};

export default setCounter;
