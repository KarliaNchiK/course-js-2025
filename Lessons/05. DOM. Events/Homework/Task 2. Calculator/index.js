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
    const buttons = document.querySelector('.calc__buttons');
    const main = document.querySelector('.calc__main');
    const result = document.querySelector('.calc__result');
    buttons.innerHTML = '';

    // Обычные кнопки с цифрами
    for (let i = 0; i < 10; i++) {
        const btn = document.createElement('button');
        btn.textContent = String(i);
        btn.classList.add('btn', 'btn-dark');
        btn.dataset.type = TYPES.DIGIT;
        buttons.appendChild(btn);
    }
    // Специальные кнопки
    ADDITIONAL_BUTTONS.forEach(({text, type}) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.classList.add('btn', 'btn-dark');
        btn.dataset.type = type;
        buttons.appendChild(btn);
    });

    // Добавляем спаны в .calc__result
    result.innerHTML = '';
    const labelSpan = document.createElement('span');
    labelSpan.textContent = 'Результат:';
    const numberSpan = document.createElement('span');
    numberSpan.classList.add('calc__result-number');
    numberSpan.textContent = '0';
    result.appendChild(labelSpan);
    result.appendChild(numberSpan);

    // Логика калькулятора
    buttons.addEventListener('click', (e) => {
        if (!e.target.matches('button')) return;
        const type = e.target.dataset.type;
        const value = e.target.textContent;
        if (type === TYPES.DIGIT || type === TYPES.PLUS) {
            main.textContent += value;
        } else if (type === TYPES.RESET) {
            main.textContent = '';
            numberSpan.textContent = '0';
        } else if (type === TYPES.RESULT) {
            const parts = main.textContent.split('+').filter(Boolean);
            const sum = parts.reduce((acc, el) => acc + Number(el), 0);
            numberSpan.textContent = sum;
        }
    });
};

export default setCalculator;