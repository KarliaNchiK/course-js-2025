const setCounter = () => {
    const existingButton = document.querySelector('.main button');
    if (existingButton) {
        return; // Если кнопка уже есть, ничего не делаем
    }
    let clickerCounter = 0;
    const element = document.querySelector(".main");
    const myButton = document.createElement('button')
    myButton.textContent = `Количество нажатий: ${clickerCounter}`;
    myButton.className = 'btn btn-warning';
    element.appendChild(myButton);
    myButton.addEventListener('click', (event) => {
        myButton.textContent = `Количество нажатий: ${++clickerCounter}`;
    })
}
export default setCounter;
