const fetchData = () => {
    const input = document.querySelector('.form-control');
    let timeoutId;

    const handleInput = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            alert(`Ищем: ${input.value}`);
        }, 1000);
    };

    input.addEventListener('input', handleInput);
};

export default fetchData;
