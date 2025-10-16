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
    let span = document.querySelector('span');
    span.remove();
    span = document.querySelector('span');
    span.remove();
    span = document.querySelector('span');
    span.remove();
};

const setLight = (type) => {
    const trafficLight = document.querySelector('.traffic__lights');
    let trafficLightContainer;

    if (document.querySelector('.traffic__lights-container') == null) {
        trafficLightContainer = document.createElement('div');
        trafficLightContainer.className = 'traffic__lights-container';
    } else {
        trafficLightContainer = document.querySelector('.traffic__lights-container');
    }

    const spanRed = document.createElement('span');

    const spanYellow = document.createElement('span');

    const spanGreen = document.createElement('span');

    switch (type) {
        case 'red':
            spanRed.className = 'red-light';
            break;
        case 'yellow':
            spanYellow.className = 'yellow-light';
            break;
        case 'green':
            spanGreen.className = 'green-light';
            break;
        default:
            break;
    }
    trafficLightContainer.appendChild(spanRed);
    trafficLightContainer.appendChild(spanYellow);
    trafficLightContainer.appendChild(spanGreen);
    trafficLight.appendChild(trafficLightContainer);
};

const setTrafficLight = () => {
    setLight('red');
    const trafficLightSelector = document.querySelector('.traffic__lights-select');

    const select = document.createElement('select');

    const optionRed = document.createElement('option');
    optionRed.value = 'red';
    optionRed.textContent = 'Красный';

    const optionYellow = document.createElement('option');
    optionYellow.value = 'yellow';
    optionYellow.textContent = 'Желтый';

    const optionGreen = document.createElement('option');
    optionGreen.value = 'green';
    optionGreen.textContent = 'Зеленый';

    select.appendChild(optionRed);
    select.appendChild(optionYellow);
    select.appendChild(optionGreen);

    trafficLightSelector.appendChild(select);

    select.addEventListener('change', () => {
        resetLights();
        setLight(select.value);
    });
};

export default setTrafficLight;
