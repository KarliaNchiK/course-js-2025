const setCalculator = () => {
    // Находим основные блоки
    const main = document.querySelector('.calc__main');
    const buttonsContainer = document.querySelector('.calc__buttons');
    const resultContainer = document.querySelector('.calc__result');

    // Создаём кнопки 0–9, +, =, Сбросить
    const buttons = [];

    for (let i = 0; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('btn', 'btn-dark');
        btn.dataset.type = 'digit';
        buttons.push(btn);
    }

    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    plusBtn.classList.add('btn', 'btn-dark');
    plusBtn.dataset.type = 'plus';
    buttons.push(plusBtn);

    const equalBtn = document.createElement('button');
    equalBtn.textContent = '=';
    equalBtn.classList.add('btn', 'btn-dark');
    equalBtn.dataset.type = 'result';
    buttons.push(equalBtn);

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Сбросить';
    resetBtn.classList.add('btn', 'btn-dark');
    resetBtn.dataset.type = 'reset';
    buttons.push(resetBtn);

    // Добавляем все кнопки в контейнер
    buttons.forEach(btn => buttonsContainer.append(btn));

    // Создаём результат
    const resultLabel = document.createElement('span');
    resultLabel.textContent = 'Результат: ';

    const resultNumber = document.createElement('span');
    resultNumber.classList.add('calc__result-number');
    resultNumber.textContent = '0';

    resultContainer.append(resultLabel, resultNumber);

    // Логика работы калькулятора
    buttonsContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.matches('button')) return;

        const type = target.dataset.type;

        if (type === 'digit' || type === 'plus') {
            main.textContent += target.textContent;
        } else if (type === 'result') {
            const expression = main.textContent;
            if (expression.trim() === '') return;
            const parts = expression.split('+').map(Number);
            const sum = parts.reduce((acc, num) => acc + num, 0);
            resultNumber.textContent = sum;
        } else if (type === 'reset') {
            main.textContent = '';
            resultNumber.textContent = '0';
        }
    });
};

export default setCalculator;
