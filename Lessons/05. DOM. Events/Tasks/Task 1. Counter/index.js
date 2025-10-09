const setCounter = () => {
    const mainElement = document.querySelector('.main');
    const button = document.createElement('button');
    button.className = 'btn';
    let count = 0;

    const updateButtomText = () => {
        button.textContent = `Количество нажатий: ${count}`;
    };

    updateButtomText();

    button.addEventListener('click', () => {
        count++;
        updateButtomText();

        if (count == 3) {
            button.classList.add('btn-warning');
        }
    });

    mainElement.appendChild(button);
};

export default setCounter;
