const fetchData = () => {
    const alertFunction = (inputText) => {
        alert(`Ищем: ${inputText}`);
    };

    const inputBar = document.querySelector('input');
    let timeID = null;


    inputBar.addEventListener('input', (event) => {
        let text = event.target.value.trim();

        if (timeID !== null) {
            clearTimeout(timeID)
        }

        if (text !== '') {
            timeID = setTimeout(() => { alertFunction(inputBar.value); timeID = null }, 1000);
        }
        else {
            timeID = null;
        }
    });
};

export default fetchData;
