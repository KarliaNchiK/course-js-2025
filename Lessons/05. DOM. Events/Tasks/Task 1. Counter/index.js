const setCounter = () => {
    let clickerCounter = 0;
    const element = document.querySelector(".main");
    const myButton = document.createElement('button')
    myButton.innerText = 'Количество нажатий: ' + clickerCounter;
    myButton.className = 'btn btn-warning';
    element.appendChild(myButton);
    myButton.addEventListener('click', (event) => {
        myButton.innerText = 'Количество нажатий: ' + ++clickerCounter;
    })
}
export default setCounter;
