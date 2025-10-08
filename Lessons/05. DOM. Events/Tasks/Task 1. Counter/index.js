const setCounter = () => {

    let btn = document.createElement('button');
    let clickAmt = 0;

    btn.textContent = `Количество нажатий: ${clickAmt}`;

    btn.addEventListener('click', () => {
        clickAmt += 1;
        btn.textContent = `Количество нажатий: ${clickAmt}`;
        btn.className = (clickAmt === 3) ? 'btn btn-warning' : '';
    })

    let parent = document.querySelector('div.main');
    parent.append(btn);
};

export default setCounter;
