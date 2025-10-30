const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${number}%`;
    }
};

const updateProgress = (defaultNumber, delta) => {
    let currentProgress = defaultNumber;

    setWidth(currentProgress);

    const increaseButton = document.querySelector('.button-increase');
    if (increaseButton) {
        increaseButton.addEventListener('click', () => {
            currentProgress = Math.min(100, currentProgress + delta);
            setWidth(currentProgress);
        });
    }

    const decreaseButton = document.querySelector('.button-decrease');
    if (decreaseButton) {
        decreaseButton.addEventListener('click', () => {
            currentProgress = Math.max(0, currentProgress - delta);
            setWidth(currentProgress);
        });
    }
};

export default updateProgress;