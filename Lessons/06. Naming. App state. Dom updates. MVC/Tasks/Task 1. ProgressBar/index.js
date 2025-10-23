const setWidth = (number) => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${number}%`;
};

const updateProgress = (defaultNumber, delta) => {
    // 1. задаем 2 аргумента (MODEL = состояние приложения)
    const state = {
        progress: defaultNumber,
    };

    // устанавливаем начальное значение
    setWidth(state.progress);

    // VIEW = находим кнопки
    const increaseButton = document.querySelector('.button-increase');
    const decreaseButton = document.querySelector('.button-decrease');

    // 2. параметры бара (CONTROLLER = обработчики событий)
    increaseButton.addEventListener('click', () => {
        // 3. увеличиваем, но  < 100
        state.progress = Math.min(state.progress + delta, 100);
        setWidth(state.progress);
    });

    decreaseButton.addEventListener('click', () => {
        // 3. yменьшаем, но > 0
        state.progress = Math.max(state.progress - delta, 0);
        setWidth(state.progress);
    });
};

export default updateProgress;
