const setWidth = (number) => {
    const progressBarContainer = document.querySelector('.progress-bar');
    if (progressBarContainer) {
        progressBarContainer.style.width = `${number}%`;
        progressBarContainer.setAttribute('aria-valueNow', number);
        progressBarContainer.textContent = `${number}%`;
    }
};

const updateProgress = (defaultNumber, delta) => {
    const mainContainer = document.querySelector('.main');
    const progressContainer = document.querySelector('.progress');
    const buttonIncrease = document.querySelector('.button-increase');
    const buttonDecrease = document.querySelector('.button-decrease');

    progressContainer.setAttribute('aria-valueMin', '0');
    progressContainer.setAttribute('aria-valueMax', '100');
    progressContainer.setAttribute('aria-valueNow', `${defaultNumber}`);

    let currentProgress = defaultNumber;
    setWidth(currentProgress);

    buttonIncrease.addEventListener('click', () => {
        currentProgress = Math.min(delta + currentProgress, 100);
        setWidth(currentProgress);
    });
    buttonDecrease.addEventListener('click', () => {
        currentProgress = Math.max(currentProgress - delta, 0);
        setWidth(currentProgress);
    });

    mainContainer.appendChild(progressContainer);
    mainContainer.appendChild(buttonIncrease);
    mainContainer.appendChild(buttonDecrease);
};

export default updateProgress;