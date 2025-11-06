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
    const buttonsContainer = document.querySelector('.calc__buttons');
    const mainDisplay = document.querySelector('.calc__main');
    const resultContainer = document.querySelector('.calc__result');

    const resultText = document.createElement('span');
    resultText.textContent = 'Результат: ';

    const resultNumber = document.createElement('span');
    resultNumber.className = 'calc__result-number';
    resultNumber.textContent = '0';

    resultContainer.appendChild(resultText);
    resultContainer.appendChild(resultNumber);

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.className = 'btn btn-dark';
        button.textContent = i;
        button.dataset.type = TYPES.DIGIT;
        buttonsContainer.appendChild(button);
    }

    ADDITIONAL_BUTTONS.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.className = 'btn btn-dark';
        button.textContent = buttonInfo.text;
        button.dataset.type = buttonInfo.type;
        buttonsContainer.appendChild(button);
    });

    buttonsContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const type = event.target.dataset.type;
            const buttonText = event.target.textContent;

            if (type === TYPES.DIGIT || type === TYPES.PLUS) {
                mainDisplay.textContent += buttonText;
            } else if (type === TYPES.RESET) {
                mainDisplay.textContent = '';
                resultNumber.textContent = '0';
            } else if (type === TYPES.RESULT) {
                const expression = mainDisplay.textContent;

                const numbers = expression.split('+')
                    .map(numStr => numStr.trim())
                    .filter(numStr => numStr !== '')
                    .map(Number);

                const sum = numbers.reduce((total, num) => total + num, 0);
                resultNumber.textContent = sum;
            }
        }
    });
};

export default setCalculator;