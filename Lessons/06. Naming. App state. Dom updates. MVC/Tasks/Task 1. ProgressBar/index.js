let widthCurrent = 0;

const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');

    if (progressBar) {
        progressBar.style.width = `${number}%`;
    }
};

const updateProgress = (defaultNumber, delta) => {
    widthCurrent = defaultNumber;

    const buttonIncrease = document.querySelector('.button-increase');
    const buttonDecrease = document.querySelector('.button-decrease');

    buttonIncrease.addEventListener('click', () => {
        widthCurrent = Math.min(widthCurrent + delta, 100);
        setWidth(widthCurrent);
    });

    buttonDecrease.addEventListener('click', () => {
        widthCurrent = Math.max(widthCurrent - delta, 0);
        setWidth(widthCurrent);
    });

    setWidth(widthCurrent);
};

export default updateProgress;
