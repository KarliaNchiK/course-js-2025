const fetchData = () => {
    const mainContainer = document.querySelector('.main');
    const input = mainContainer.querySelector('.form-control');
    let timeOut = null;

    const cons = (name) => {
        alert(`Ищем: ${name}`);
    };
    input.addEventListener('input', () => {
        clearTimeout(timeOut);
        timeOut = setTimeout(cons, 1000, input.value);
    });
};

export default fetchData;
