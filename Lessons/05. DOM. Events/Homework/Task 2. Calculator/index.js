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
    const calcMain = document.querySelector('.calc__main');
    const calcResult = document.querySelector('.calc__result');

    for (let i = 0; i <= 9; i++) {
        createButton(i, calcMain);
    }

    ADDITIONAL_BUTTONS.map(button => createButton(button.text, calcMain));

    const spanResult = document.createElement('span');
    spanResult.textContent = 'Результат: ';

    const spanCalc = document.createElement('span');
    spanCalc.className = 'calc__result-number';
    spanCalc.textContent = '0';

    calcResult.appendChild(spanResult);
    calcResult.appendChild(spanCalc);
};

const createButton = (symbol, calcMain) => {
    const button = document.createElement('button');
    button.classList = 'btn btn-dark';
    button.textContent = `${symbol}`;

    button.addEventListener('click', () => {
        const resultNumberSpan = document.querySelector('.calc__result-number');

        if ((symbol <= 9 && symbol >= 0) || symbol == '+') {
            if (calcMain.textContent == '0') {
                calcMain.textContent = button.textContent;
            }
            else if (!(calcMain.textContent.at(-1) == '+' && symbol == '+')) {
                calcMain.textContent += button.textContent;
            }
        }
        else if (symbol == 'Сбросить') {
            calcMain.textContent = '';
            resultNumberSpan.textContent = '0';
        }
        else if (symbol == '=') {
            if (calcMain.textContent != '' && calcMain.textContent.at(-1) != '+') {
                resultNumberSpan.textContent = calcMain.textContent
                    .split('+')
                    .map(Number)
                    .reduce((sum, num) => sum + num, 0);
            }
        }
    });

    const calcButtons = document.querySelector('.calc__buttons')
    calcButtons.appendChild(button);
}

export default setCalculator;