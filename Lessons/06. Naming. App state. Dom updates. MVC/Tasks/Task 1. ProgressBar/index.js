const updateProgress = (defaultNumber = 0, delta = 10) => {
    let current = defaultNumber;

    const main = document.querySelector('.main');
    const progressBar = main.querySelector('.progress-bar');
    const buttonIncrease = main.querySelector('.button-increase');
    const buttonDecrease = main.querySelector('.button-decrease');
    const setWidth = (number) => {
        progressBar.style.width = `${number}%`;
    };
    setWidth(current);
    buttonIncrease.onclick = () => {
        current = Math.min(100, current + delta);
        setWidth(current);
    };

    buttonDecrease.onclick = () => {
        current = Math.max(0, current - delta);
        setWidth(current);
    };
};

export default updateProgress;
