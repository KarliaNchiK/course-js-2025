const sendData = (text) => {
    alert('Ищем: ' + text);
};
const fetchData = () => {
    const form = document.querySelector('.form-control');
    let timeoutId;
    form.addEventListener('input', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(sendData, 1000, form.value);
    });
};

export default fetchData;
