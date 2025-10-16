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
    const buttonsBlock = document.querySelector('.calc__buttons');
    const mainBlock = document.querySelector('.calc__main');
    const resultBlock = document.querySelector('.calc__result');

    const resultText = document.createElement('span');
    resultText.textContent = 'Результат:';

    const resultNumber = document.createElement('span');
    resultNumber.className = 'calc__result-number';
    resultNumber.textContent = '0';

    resultBlock.innerHTML = '';
    resultBlock.appendChild(resultText);
    resultBlock.appendChild(resultNumber);

    buttonsBlock.innerHTML = '';

    for (let i = 0; i <= 9; i += 1) {
        const button = document.createElement('button');
        button.textContent = i.toString();
        button.className = 'btn btn-dark';
        button.dataset.type = TYPES.DIGIT;
        buttonsBlock.appendChild(button);
    }

    ADDITIONAL_BUTTONS.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.textContent = buttonInfo.text;
        button.className = 'btn btn-dark';
        button.dataset.type = buttonInfo.type;
        buttonsBlock.appendChild(button);
    });

    const calculateResult = () => {
        const expression = mainBlock.textContent;
        if (!expression) {
            return 0;
        }

        const numbers = expression.split('+').map(num => {
            const parsed = parseInt(num.trim(), 10);
            if (Number.isNaN(parsed)) {
                return 0;
            }
            return parsed;
        });

        return numbers.reduce((total, num) => total + num, 0);
    };

    buttonsBlock.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const type = event.target.dataset.type;
            const value = event.target.textContent;

            // eslint-disable-next-line default-case
            switch (type) {
                case TYPES.DIGIT:
                { const currentText = mainBlock.textContent;
                    if (currentText === '') {
                        mainBlock.textContent += value;
                        break;
                    }

                    if (currentText.endsWith('+')) {
                        mainBlock.textContent += value;
                    } else {
                        const parts = currentText.split('+');
                        const lastNumber = parts[parts.length - 1];

                        if (lastNumber === '0') { /* empty */ } else {
                            mainBlock.textContent += value;
                        }
                    }
                    break; }

                case TYPES.PLUS:
                { const currentText = mainBlock.textContent;
                    if (currentText && !currentText.endsWith('+')) {
                        mainBlock.textContent += value;
                    }
                    break; }

                case TYPES.RESULT:
                { const result = calculateResult();
                    resultNumber.textContent = result;
                    break; }

                case TYPES.RESET:
                    mainBlock.textContent = '';
                    resultNumber.textContent = '0';
                    break;
            }
        }
    });
};
export default setCalculator;
