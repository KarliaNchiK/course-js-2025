const setCounter = () => {
    const mainElement = document.querySelector('.main');
    let clickCount = 0;

    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = `Количество нажатий: ${clickCount}`;

    button.addEventListener('click', () => {
        clickCount += 1;
        button.textContent = `Количество нажатий: ${clickCount}`;
    });

    mainElement.appendChild(button);
};

export default setCounter;
