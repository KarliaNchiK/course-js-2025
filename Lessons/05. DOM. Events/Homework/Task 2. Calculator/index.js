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
    const resultContainer = document.querySelector('.calc__result');
    
    const resultLeft = document.createElement('span');
    resultLeft.textContent = 'Результат: ';
    resultContainer.appendChild(resultLeft);
    
    const resultRight = document.createElement('span');
    resultRight.className = 'calc__result-number';
    resultRight.textContent = '0';
    resultContainer.appendChild(resultRight);

    const buttonsContainer = document.querySelector('.calc__buttons');
    const buttonsContents = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        ADDITIONAL_BUTTONS[0].text, 
        ADDITIONAL_BUTTONS[1].text, 
        ADDITIONAL_BUTTONS[2].text];
    
    buttonsContents.forEach((value) => {
        const button = document.createElement('button');
        button.className = 'btn btn-dark';
        button.textContent = value;
        button.dataset.type = value === ADDITIONAL_BUTTONS[0].text ? TYPES.PLUS : 
                             value === ADDITIONAL_BUTTONS[1].text ? TYPES.RESULT : 
                             value === ADDITIONAL_BUTTONS[2].text ? TYPES.RESET : 
                             TYPES.DIGIT;

        button.addEventListener('click', () => {
            showInMain(value, button.dataset.type);
        });

        buttonsContainer.appendChild(button);
    });
};

const showInMain = (content, dataType) => {
    const mainContainer = document.querySelector('.calc__main');
    const resultContainer = document.querySelector('.calc__result-number');
    
    if(dataType === TYPES.DIGIT || dataType === TYPES.PLUS){
        mainContainer.textContent += content;
    }
    else if(dataType === TYPES.RESET){
        mainContainer.textContent = '';
        resultContainer.textContent = '0';
    }
    else if(dataType === TYPES.RESULT){
        try {
            const numbers = mainContainer.textContent.split('+').map(num => {
                const parsed = parseInt(num, 10);
                return isNaN(parsed) ? 0 : parsed;
            });
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resultContainer.textContent = sum.toString();
        } catch (error) {
            resultContainer.textContent = 'Ошибка';
        }
    }
};

export default setCalculator;