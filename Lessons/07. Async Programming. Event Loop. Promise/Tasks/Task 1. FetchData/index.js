const fetchData = () => {
    const input = document.querySelector('.form-control');
    let timeoutId;
    input.addEventListener('input', (event) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            alert(`Ищем: ${event.target.value}`);
        }, 1000);
    });
};

export default fetchData;