const setCounter = () => {
    const main = document.querySelector('.main');
    const button = document.createElement('button');
    let count = 0;

    const updateButtonText = () => {
        button.textContent = `Количество нажатий: ${count}`;
    };
    updateButtonText();

    button.addEventListener('click', () => {
        count++;
        updateButtonText();
    });
    main.append(button);
};
export default setCounter;
