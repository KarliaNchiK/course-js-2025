let appState = {
    currentWidth: 0,
    step: 0
};
let renderProgressBar = () => {
    let progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${appState.currentWidth}%`;
}
let initializeProgress = (initialWidth, stepSize) => {
    appState.currentWidth = initialWidth;
    appState.step = stepSize;
    renderProgressBar();
}

let increaseProgressBar = () => {
    appState.currentWidth = Math.min(100, appState.currentWidth + appState.step);
    renderProgressBar();
}
let decreaseProgressBar = () => {
    appState.currentWidth = Math.max(0, appState.currentWidth - appState.step);

    renderProgressBar();
}
const setWidth = (number) => {

};

const updateProgress = (defaultNumber, delta) => {
    let increaseBtn = document.querySelector('.button-increase');
    let decreaseBtn = document.querySelector('.button-decrease');
    setWidth(defaultNumber);
    initializeProgress(defaultNumber, delta);

    increaseBtn.addEventListener('click', increaseProgressBar);
    decreaseBtn.addEventListener('click', decreaseProgressBar);
};

export default updateProgress;
