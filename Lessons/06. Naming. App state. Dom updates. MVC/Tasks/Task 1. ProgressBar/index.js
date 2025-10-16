const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');

    progressBar.style.width = `${number}%`;
};

const updateProgress = (defaultNumber, delta) => {
    const state = {
        progress: defaultNumber,
    };

    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    const updateProgressBar = () => {
        setWidth(state.progress);
    };

    increaseButton.addEventListener('click', () => {
        state.progress = Math.min(state.progress + delta, 100);
        updateProgressBar();
    });

    decreaseButton.addEventListener('click', () => {
        state.progress = Math.max(state.progress - delta, 0);
        updateProgressBar();
    });

    updateProgressBar();
};

export default updateProgress;
