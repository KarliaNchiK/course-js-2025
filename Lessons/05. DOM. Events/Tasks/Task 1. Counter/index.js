const setCounter = () => {

    const mainElement = document.querySelector('.main');


    const button = document.createElement('button');

    button.className = 'btn btn-warning';

    let count = 0;

    const updateButtonText = () => {
        button.textContent = 'Количество нажатий: ' + count;
    };

    const handleClick =() => {
        count++;
        updateButtonText();
    }

    button.addEventListener('click', handleClick);

    updateButtonText();

    mainElement.appendChild(button);
};


export default setCounter;
