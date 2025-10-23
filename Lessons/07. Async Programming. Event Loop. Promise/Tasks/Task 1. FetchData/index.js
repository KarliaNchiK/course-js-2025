const fetchData = () => {
    const input = document.querySelector('.form-control');
    let timerId = null;

    input.addEventListener('input', () => {
        // 1. oчищаем предыдущий таймер
        if (timerId) {
            clearTimeout(timerId);
        }

        // 2. yстанавливаем новый таймер на 1 секунду
        timerId = setTimeout(() => {
            const searchText = input.value;
            alert(`Ищем: ${searchText}`);
        }, 1000);
    });
};

export default fetchData;
