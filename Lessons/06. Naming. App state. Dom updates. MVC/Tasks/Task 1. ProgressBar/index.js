const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${number}%`;
};

const updateProgress = (defaultNumber, delta) => {
    let currentProgress = defaultNumber;
    setWidth(currentProgress);

    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    increaseButton.addEventListener('click', () => {
        currentProgress = Math.min(currentProgress + delta, 100);
        setWidth(currentProgress);
    });

    decreaseButton.addEventListener('click', () => {
        currentProgress = Math.max(currentProgress - delta, 0);
        setWidth(currentProgress);
    });
};

export default updateProgress;
