const fetchData = () => {
    let timeoutId;
    let currentValue = '';
    const inputField = document.querySelector('.form-control');
    
    inputField.addEventListener('input', (e) => {
        currentValue = e.target.value;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            alert('Ищем: ' + currentValue);
        }, 1000);
    });
};

export default fetchData;
