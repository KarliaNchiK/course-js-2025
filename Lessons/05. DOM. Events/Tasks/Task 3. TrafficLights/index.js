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

const resetLights = (lightSpans) => {
    lightSpans.red.classList.remove('red-light');
    lightSpans.yellow.classList.remove('yellow-light');
    lightSpans.green.classList.remove('green-light');
};

const setLight = (type, lightSpans) => {
    resetLights(lightSpans);
    lightSpans[type].classList.add(`${type}-light`);
};

const setTrafficLight = () => {
    const trafficLightsContainer = document.querySelector('.traffic__lights');
    const trafficSelectContainer = document.querySelector('.traffic__lights-select');

    const lightsContainer = document.createElement('div');
    lightsContainer.className = 'traffic__lights-container';

    trafficLightsContainer.appendChild(lightsContainer);

    const redSpan = document.createElement('span');
    const yellowSpan = document.createElement('span');
    const greenSpan = document.createElement('span');

    const lightSpans = {
        red: redSpan,
        yellow: yellowSpan,
        green: greenSpan,
    };

    lightsContainer.appendChild(redSpan);
    lightsContainer.appendChild(yellowSpan);
    lightsContainer.appendChild(greenSpan);

    const select = document.createElement('select');
    select.className = 'form-select';

    for (const key in LIGHTS) {
        const option = document.createElement('option');
        option.value = LIGHTS[key].type;
        option.textContent = LIGHTS[key].text;

        select.appendChild(option);
    }

    trafficSelectContainer.appendChild(select);
    setLight('red', lightSpans);

    select.addEventListener('change', (event) => {
        const selectedType = event.target.value;
        setLight(selectedType, lightSpans);
    });
};

export default setTrafficLight;
