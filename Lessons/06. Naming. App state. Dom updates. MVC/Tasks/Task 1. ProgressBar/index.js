const setWidth = (number) => {
    const progressBarContainer = document.querySelector('.progress-bar');
    progressBarContainer.style = `width: ${number}%`;
    progressBarContainer.setAttribute('aria-valueNow', number);
    progressBarContainer.textContent = `${number}%`;
};

const updateProgress = (defaultNumber, delta) => {
    const progressBarContainer = document.querySelector('.progress');
    const mainContainer = document.querySelector('.main');
    progressBarContainer.setAttribute('aria-valueMin', '0');
    progressBarContainer.setAttribute('aria-valueMax', '100');
    progressBarContainer.setAttribute('aria-valueNow', `${defaultNumber}`);
    let currentProgress = defaultNumber;
    setWidth(currentProgress);
    const buttonIncrease = document.querySelector('.button-increase');
    const buttonDecrease = document.querySelector('.button-decrease');

    buttonIncrease.addEventListener('click', () => {
        currentProgress += delta;
        if (currentProgress > 100) {
            currentProgress = 100;
        }
        setWidth(currentProgress);
    });

    buttonDecrease.addEventListener('click', () => {
        currentProgress -= delta;
        if (currentProgress < 0) {
            currentProgress = 0;
        }
        setWidth(currentProgress);
    });
    mainContainer.appendChild(progressBarContainer);
    mainContainer.appendChild(buttonIncrease);
    mainContainer.appendChild(buttonDecrease);
};

export default updateProgress;
