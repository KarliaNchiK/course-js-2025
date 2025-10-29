const LIGHTS = {
    red: {
        type: 'red',
        text: 'Красный',
    },
    yellow: {
        type: 'yellow',
        text: 'Желтый',
    },
    green: {
        type: 'green',
        text: 'Зеленый',
    },
};

const resetLights = () => {
    const spans = document.querySelector(".traffic__lights-container").children;
    
    for (let span of spans) {
        span.className = '';
    }
};

const setLight = (type) => {
    
    resetLights();
    
    const spans = document.querySelector(".traffic__lights-container").children;

    if (type === LIGHTS.red.text) {
        spans[0].className = 'red-light';
    } else if (type === LIGHTS.yellow.text) {
        spans[1].className = 'yellow-light';
    } else if (type === LIGHTS.green.text) {
        spans[2].className = 'green-light';
    }
};

const setTrafficLight = () => {

    const trafficLights = document.querySelector('.traffic__lights');
    const trafficLightsContainer = document.createElement('div');
    const trafficLightsSelect = document.querySelector('.traffic__lights-select');
    
    //Тут создаётся светофор:

    trafficLightsContainer.className = 'traffic__lights-container';
    const redLighter = document.createElement('span');
    const yellowLighter = document.createElement('span');
    const greenLighter = document.createElement('span');
    redLighter.className = 'red-light';

    trafficLightsContainer.appendChild(redLighter);
    trafficLightsContainer.appendChild(yellowLighter);
    trafficLightsContainer.appendChild(greenLighter);

    trafficLights.appendChild(trafficLightsContainer);
    
    //Поле выбора:

    const select = document.createElement('select');
    const optionRed = document.createElement('option');
    const optionYellow = document.createElement('option');
    const optionGreen = document.createElement('option');

    optionRed.textContent = LIGHTS.red.text;
    optionYellow.textContent = LIGHTS.yellow.text;
    optionGreen.textContent = LIGHTS.green.text;

    select.appendChild(optionRed);
    select.appendChild(optionYellow);
    select.appendChild(optionGreen);

    //Обработчики:

    select.addEventListener('change', () => {
        setLight(select.value);
    });

    trafficLightsSelect.appendChild(select);
    
};

export default setTrafficLight;
