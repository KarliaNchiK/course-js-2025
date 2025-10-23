const fetchData = (() => {
    const input = document.querySelector('.form-control');

    if (!input) {
        return;
    } // защита от ошибки, если элемент не найден

    let timeoutId;

    input.addEventListener('input', (event) => {
        clearTimeout(timeoutId);
        const value = event.target.value;
        timeoutId = setTimeout(() => {
            alert(`Ищем: ${value}`);
        }, 1000);
    });
});

export default fetchData;