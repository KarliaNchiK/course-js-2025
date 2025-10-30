const fetchData = () => {

    let timerId;
    const elementInput = document.querySelector(".form-control")
    elementInput.addEventListener("input", (event) => {
        clearTimeout(timerId);
        const value = event.target.value;
        timerId = setTimeout(alert, 1000, `Ищем: ${value}`);
    })



};

export default fetchData;
