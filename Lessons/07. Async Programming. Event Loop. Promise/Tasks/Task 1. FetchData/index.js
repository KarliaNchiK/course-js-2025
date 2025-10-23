const fetchData = () => {
    let timerId;
    const input = document.querySelector('.form-control');
    let resultBlock = document.querySelector('.search-result');
    if (!resultBlock) {
        resultBlock = document.createElement('div');
        resultBlock.className = 'search-result';
        resultBlock.style.marginTop = '16px';
        input.parentNode.appendChild(resultBlock);
    }

    input.addEventListener('input', () => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            const value = input.value;
            if (value) {
                const text = 'Ищем: ' + value;
                alert(text);
                resultBlock.textContent = text; // Выводим на страницу
            } else {
                resultBlock.textContent = '';
            }
        }, 1000);
    });
};
export default fetchData;
