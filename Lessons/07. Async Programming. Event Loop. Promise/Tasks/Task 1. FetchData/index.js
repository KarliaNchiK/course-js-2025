const TIME_DELAY = 200;
let searchTimeout = null;
let state = '';

const alertData = (data) => {
    alert(data);
}
const render = (data) => {
    state = `Ищем: ${data}`;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(alertData, TIME_DELAY, state);
}
const addListener = (event) => {
    event.addEventListener('input', () => {
        render(event.value);
    })
}
const fetchData = () => {
    let input = document.querySelector('.form-control');
    addListener(input);
};

export default fetchData;
