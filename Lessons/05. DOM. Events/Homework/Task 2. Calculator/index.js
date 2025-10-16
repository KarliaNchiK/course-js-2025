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
    const calc = document.querySelector('.calc');
    const calcHeader = document.querySelector('.calc__header');
    const calcMain = document.querySelector('.calc__main');
    const calcButtons = document.querySelector('.calc__buttons');
    const calcResult = document.querySelector('.calc__result');

    const spanResult = document.createElement('span');
    spanResult.textContent = 'Результат: ';

    const spanResultNumber = document.createElement('span');
    spanResultNumber.className = 'calc__result-number';

    let line = '0';
    spanResultNumber.textContent = line;

    for (let i = 0; i < 10; i += 1) {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = 'digit';
        button.textContent = `${i}`;
        calcButtons.appendChild(button);
    }

    const buttonPlus = document.createElement('button');
    buttonPlus.classList.add('btn', 'btn-dark');
    buttonPlus.dataset.type = ADDITIONAL_BUTTONS[0].type;
    buttonPlus.textContent = '+';

    const buttonEqual = document.createElement('button');
    buttonEqual.classList.add('btn', 'btn-dark');
    buttonEqual.dataset.type = ADDITIONAL_BUTTONS[1].type;
    buttonEqual.textContent = '=';

    const buttonReset = document.createElement('button');
    buttonReset.classList.add('btn', 'btn-dark');
    buttonReset.dataset.type = ADDITIONAL_BUTTONS[2].type;
    buttonReset.textContent = 'Сбросить';

    calcButtons.appendChild(buttonPlus);
    calcButtons.appendChild(buttonEqual);
    calcButtons.appendChild(buttonReset);

    calcButtons.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const buttonText = event.target.textContent;
            const type = event.target.dataset.type;
            let number = 0;
            if (type === 'digit') {
                if (line.length === 1 && line[0] === '0') {
                    line = '';
                }
                switch (buttonText) {
                    case '0':
                        line += '0';
                        calcMain.textContent = line;
                        break;
                    case '1':
                        line += '1';
                        calcMain.textContent = line;
                        break;
                    case '2':
                        line += '2';
                        calcMain.textContent = line;
                        break;
                    case '3':
                        line += '3';
                        calcMain.textContent = line;
                        break;
                    case '4':
                        line += '4';
                        calcMain.textContent = line;
                        break;
                    case '5':
                        line += '5';
                        calcMain.textContent = line;
                        break;
                    case '6':
                        line += '6';
                        calcMain.textContent = line;
                        break;
                    case '7':
                        line += '7';
                        calcMain.textContent = line;
                        break;
                    case '8':
                        if (line.length !== 0 && line[0] !== '0' && line.at(-1) !== '+') {
                            line += '8';
                            calcMain.textContent = line;
                        }
                        break;
                    case '9':
                        if (line.length !== 0 && line[0] !== '0' && line.at(-1) !== '+') {
                            line += '9';
                            calcMain.textContent = line;
                        }
                        break;
                    default:
                }
            } else {
                switch (buttonText) {
                    case '+':
                        line += '+';
                        calcMain.textContent = line;
                        break;
                    case '=':
                        number = line.split('+');
                        spanResultNumber.textContent = number.reduce((sum, num) => sum + Number(num), 0);
                        break;
                    case 'Сбросить':
                        line = '';
                        calcMain.textContent = line;
                        spanResultNumber.textContent = '0';
                        break;
                    default:
                }
            }
        }
    });
    calcResult.appendChild(spanResult);
    calcResult.appendChild(spanResultNumber);

    calc.appendChild(calcHeader);
    calc.appendChild(calcMain);
    calc.appendChild(calcButtons);
    calc.appendChild(calcResult);
};

export default setCalculator;
