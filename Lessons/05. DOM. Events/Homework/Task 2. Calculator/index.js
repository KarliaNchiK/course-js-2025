const TYPES = {
    DIGIT: 'digit',
    PLUS: 'plus',
    RESULT: 'result',
    RESET: 'reset',
};

const ADDITIONAL_BUTTONS = [
    {
        text: '+',
        type: TYPES.PLUS,
    },
    {
        text: '=',
        type: TYPES.RESULT,
    },
    {
        text: 'Сбросить',
        type: TYPES.RESET,
    },
];

const setCalculator = () => {
    let calcMain = document.querySelector('.calc__main');
    let calcButtons = document.querySelector('.calc__buttons');
    let calcResult = document.querySelector('.calc__result');

    let resultSpan = document.createElement('span');
    resultSpan.textContent = 'Результат:';
    calcResult.appendChild(resultSpan);

    let resultNumberSpan = document.createElement('span');
    resultNumberSpan.textContent = '0';
    resultNumberSpan.classList.add('calc__result-number');
    calcResult.appendChild(resultNumberSpan);

    let addBtn = (value, data) => {
        let btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn-dark');
        btn.textContent = value;
        btn.setAttribute('data-type', data);
        calcButtons.append(btn);

        btn.addEventListener('click', (event) => {
            let type = event.target.getAttribute('data-type');
            if (type === TYPES.DIGIT || type === TYPES.PLUS)
            {
                calcMain.textContent += value;
            } else if (type === TYPES.RESULT) {
                let numbers = calcMain.textContent.split('+').map(n => parseInt(n));
                let sum = numbers.reduce((acc, cur) => acc + cur, 0);
                // calcMain.textContent = '';
                resultNumberSpan.textContent = sum;
            } else {
                calcMain.textContent = '';
                resultNumberSpan.textContent = '0';
            }
        })
    }
    for (let i = 0; i <= 9; i += 1) {
        addBtn(i.toString(), TYPES.DIGIT);
    }

    ADDITIONAL_BUTTONS.forEach(button => {
        addBtn(button.text, button.type);
    });
};

export default setCalculator;
