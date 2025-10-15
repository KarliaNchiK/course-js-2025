let currentProgress = 0;

const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = number + '%';

    }
};

const updateProgress = (defaultNumber, delta) => {
    currentProgress = defaultNumber;
    setWidth(currentProgress);

    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    increaseButton.addEventListener('click', () => {
        currentProgress = Math.min(100, currentProgress + delta);
        setWidth(currentProgress);
    });

    decreaseButton.addEventListener('click', () => {
        currentProgress = Math.max(0, currentProgress - delta);
        setWidth(currentProgress);
    });
};

export default updateProgress;
