const fetchData = () => {

    const input = document.querySelector(".form-control");
    let timer;

    input.addEventListener('input', function (event) {

            clearTimeout(timer);

            timer = setTimeout(() => {
                const searchText = event.target.value;
                if (searchText.trim() !== '') {
                    alert('Ищем: ' + searchText);
                }
            }, 1000);
    });
};



export default fetchData;
