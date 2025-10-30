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
    const elementMain = document.querySelector(".calc__main");
    const elementButtons = document.querySelector(".calc__buttons");
    const elementResult = document.querySelector(".calc__result");

    const mySpanTextElement = document.createElement("span");
    mySpanTextElement.textContent = "Результат: ";
    elementResult.appendChild(mySpanTextElement);

    const mySpanResultElement = document.createElement("span");
    mySpanResultElement.textContent = 0;
    mySpanResultElement.className = "calc__result-number";
    elementResult.appendChild(mySpanResultElement);

    for (let i = 0; i < 10; i++) {
        const myButtonElement = document.createElement("button");
        myButtonElement.textContent = i;
        myButtonElement.dataset.type = TYPES.DIGIT;
        myButtonElement.className = "btn btn-dark";
        elementButtons.appendChild(myButtonElement);

        myButtonElement.addEventListener('click', (event) => {
            elementMain.textContent += myButtonElement.textContent;
        })
    }

    for (let i = 0; i < 3; i++) {
        const myButtonElement = document.createElement("button");
        myButtonElement.textContent = ADDITIONAL_BUTTONS[i].text;
        myButtonElement.dataset.type = ADDITIONAL_BUTTONS[i].type;
        myButtonElement.className = "btn btn-dark";
        elementButtons.appendChild(myButtonElement);

        myButtonElement.addEventListener("click", (event) => {
            switch (myButtonElement.textContent) {
                case "+":
                    if (elementMain.textContent === "" || elementMain.textContent.slice(-1) === "+") {
                        break;
                    }
                    elementMain.textContent += "+"
                    break;
                case "=":
                    const numbers = elementMain.textContent.split("+");
                    let sum = 0;
                    for (const num of numbers) {
                        sum += +num;
                    }
                    mySpanResultElement.textContent = sum;
                    break;
                case "Сбросить":
                    elementMain.textContent = "";
                    mySpanResultElement.textContent = 0;
                    break;
            }
        })
    }




};

export default setCalculator;
