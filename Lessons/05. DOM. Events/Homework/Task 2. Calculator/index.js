let currentNumber = '0';
let sum = 0;
let line = '';

const addDigit = (digit) => {
    if (currentNumber === '0') {
        if (digit !== '0') {
            currentNumber = digit;
            line += digit;
        }
    } else {
        currentNumber += digit;
        line += digit;
    }
};

const addToSum = () => {
    if (line.at(-1) !== '+') {
        sum += Number(currentNumber);
        currentNumber = '0';
        line += '+';
    }
};

const setCalculator = () => {
    const buttonsContainer = document.querySelector('.calc__buttons');
    const resultContainer = document.querySelector('.calc__result');
    const mainContainer = document.querySelector('.calc__main');
    mainContainer.textContent = line;

    const resultTitle = document.createElement('span');
    resultTitle.textContent = 'Результат:';

    const resultValue = document.createElement('span');
    resultValue.className = 'calc__result-number';
    resultValue.textContent = '0';
    for (let i = 0; i < 10; i += 1) {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-dark');
        button.dataset.type = 'digit';
        button.textContent = i.toString();
        button.addEventListener('click', () => {
            addDigit(i.toString());
            mainContainer.textContent = line;
        });
        buttonsContainer.appendChild(button);
    }

    const plusButton = document.createElement('button');
    plusButton.classList.add('btn', 'btn-dark');
    plusButton.textContent = '+';

    const equalsButton = document.createElement('button');
    equalsButton.classList.add('btn', 'btn-dark');
    equalsButton.textContent = '=';

    const resetButton = document.createElement('button');
    resetButton.classList.add('btn', 'btn-dark');
    resetButton.textContent = 'Сбросить';
    plusButton.addEventListener('click', () => {
        addToSum();
        mainContainer.textContent = line;
    });

    equalsButton.addEventListener('click', () => {
        sum += Number(currentNumber);
        resultValue.textContent = sum.toString();
        currentNumber = '0';
    });

    resetButton.addEventListener('click', () => {
        currentNumber = '0';
        sum = 0;
        line = '';
        mainContainer.textContent = line;
        resultValue.textContent = '0';
    });

    resultContainer.appendChild(resultTitle);
    resultContainer.appendChild(resultValue);
    buttonsContainer.appendChild(plusButton);
    buttonsContainer.appendChild(equalsButton);
    buttonsContainer.appendChild(resetButton);
};

export default setCalculator;
