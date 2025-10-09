const setCounter = () => {
    let counter = 0;

    const container = document.querySelector('.main');

    const space = document.createElement('div');
    const button = document.createElement('button');
    button.textContent = 'Количество нажатий: 0';

    button.addEventListener('click', () => {
        counter += 1;
        button.textContent = `Количество нажатий: ${counter}`;
    });

    container.appendChild(space);
    container.appendChild(button);
};

export default setCounter;
