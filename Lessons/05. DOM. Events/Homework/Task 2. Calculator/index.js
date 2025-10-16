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
    const main = document.querySelector('.calc__main');
    const buttonsContainer = document.querySelector('.calc__buttons');
    const resultContainer = document.querySelector('.calc__result');

    if (!main || !buttonsContainer || !resultContainer) return;

    for (let i = 0; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('btn', 'btn-dark');
        btn.dataset.type = TYPES.DIGIT;
        buttonsContainer.appendChild(btn);
    }

    ADDITIONAL_BUTTONS.forEach(({ text, type }) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.classList.add('btn', 'btn-dark');
        btn.dataset.type = type;
        buttonsContainer.appendChild(btn);
    });

    const spanLabel = document.createElement('span');
    spanLabel.textContent = 'Результат:';

    const spanResult = document.createElement('span');
    spanResult.classList.add('calc__result-number');
    spanResult.textContent = '0';

    resultContainer.append(spanLabel, spanResult);

    buttonsContainer.addEventListener('click', (event) => {
        const button = event.target;
        const type = button.dataset.type;
        if (!type) return;

        if (type === TYPES.DIGIT) {
            main.textContent += button.textContent;
        }

        if (type === TYPES.PLUS) {
            if (main.textContent.endsWith('+') || main.textContent === '') return;
            main.textContent += '+';
        }

        if (type === TYPES.RESULT) {
            const expression = main.textContent.trim();
            if (expression === '') return;

            const parts = expression.split('+').map((num) => Number(num));
            const sum = parts.reduce((acc, n) => acc + (isNaN(n) ? 0 : n), 0);
            spanResult.textContent = sum;
        }

        if (type === TYPES.RESET) {
            main.textContent = '';
            spanResult.textContent = '0';
        }
    });
};

export default setCalculator;
