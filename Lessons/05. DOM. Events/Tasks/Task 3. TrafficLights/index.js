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

let redLight;
let yellowLight;
let greenLight;
const resetLights = () => {
    redLight.className = '';
    yellowLight.className = '';
    greenLight.className = '';
};

const setLight = (type) => {
    resetLights();

    switch (type) {
        case 'red':
            redLight.className = 'red-light';
            break;
        case 'yellow':
            yellowLight.className = 'yellow-light';
            break;
        case 'green':
            greenLight.className = 'green-light';
            break;
        default:
            break;
    }
};

const setTrafficLight = () => {
    const lightsContainer = document.querySelector('.traffic__lights');
    const selectContainer = document.querySelector('.traffic__lights-select');

    const trafficLightsContainer = document.createElement('div');
    trafficLightsContainer.className = 'traffic__lights-container';

    redLight = document.createElement('span');
    yellowLight = document.createElement('span');
    greenLight = document.createElement('span');

    redLight.className = 'red-light';

    trafficLightsContainer.appendChild(redLight);
    trafficLightsContainer.appendChild(yellowLight);
    trafficLightsContainer.appendChild(greenLight);

    lightsContainer.appendChild(trafficLightsContainer);

    const select = document.createElement('select');
    select.className = 'form-select';

    const redOption = document.createElement('option');
    redOption.value = LIGHTS.red.type;
    redOption.textContent = LIGHTS.red.text;
    redOption.selected = true;

    const yellowOption = document.createElement('option');
    yellowOption.value = LIGHTS.yellow.type;
    yellowOption.textContent = LIGHTS.yellow.text;

    const greenOption = document.createElement('option');
    greenOption.value = LIGHTS.green.type;
    greenOption.textContent = LIGHTS.green.text;

    select.appendChild(redOption);
    select.appendChild(yellowOption);
    select.appendChild(greenOption);

    selectContainer.appendChild(select);

    select.addEventListener('change', function () {
        setLight(this.value);
    });
};

export default setTrafficLight;
