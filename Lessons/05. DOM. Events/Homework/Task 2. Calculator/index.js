// import {createElement} from "jsdom/lib/jsdom/living/helpers/create-element.js";

// import {reset} from "sinon";

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

    const calcButtons = document.querySelector('.calc__buttons');
    const calcResult = document.querySelector('.calc__result');
    const calcMain = document.querySelector('.calc__main');

    const resultNumber = document.createElement('span');
    resultNumber.textContent = '0';
    resultNumber.className = 'calc_result-number';

    for(let i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = "btn btn-dark";

        button.addEventListener('click', () => {
            calcMain.textContent += i;
        })

        calcButtons.appendChild(button);
    }

    const plusEl = document.createElement('button');
    plusEl.textContent = '+';
    plusEl.className = "btn btn-dark";


    plusEl.addEventListener('click', () => {
        calcMain.textContent += '+';
    })

    calcButtons.appendChild(plusEl);



    const equalsEl = document.createElement('button');
    equalsEl.textContent = '=';
    equalsEl.className = "btn btn-dark";


    equalsEl.addEventListener('click', () => {
        const expression = calcMain.textContent;

        if (expression) {
            const numbers = expression.split('+');
            const sum = numbers.reduce((total,num) => total + Number(num), 0);
            resultNumber.textContent = sum;
        }
    })
    calcButtons.appendChild(equalsEl);


    const resetEl = document.createElement('button');
    resetEl.textContent = 'Сбросить';
    resetEl.className = "btn btn-dark";





    resetEl.addEventListener('click', () => {
        calcMain.textContent = '';
        resultNumber.textContent = '0';
    })

    calcButtons.appendChild(resetEl);


    const resultText = document.createElement('span');
    resultText.textContent = 'Результат: ';
    calcResult.appendChild(resultText);
    calcResult.appendChild(resultNumber);

};

export default setCalculator;
