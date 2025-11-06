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

let redLight = document.createElement('span');
let yellowLight = document.createElement('span');
let greenLight = document.createElement('span');

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
    }
};

const setTrafficLight = () => {
    const traficLights = document.querySelector('.traffic__lights');
    const lightsContainer = document.createElement('div');
    lightsContainer.classList.add('traffic__lights-container');

    traficLights.appendChild(lightsContainer);

    lightsContainer.appendChild(redLight);
    lightsContainer.appendChild(yellowLight);
    lightsContainer.appendChild(greenLight);

    setLight('red');

    const traficLightsSelect = document.querySelector('.traffic__lights-select');
    const colorSelect = document.createElement('select');

    const options = [
        {value: 'red', text: 'Красный'},
        {value: 'yellow', text: 'Желтый'},
        {value: 'green', text: 'Зеленый'}
    ];

    options.forEach(opt => {
        const optionElement = document.createElement('option');
        optionElement.value = opt.value;
        optionElement.textContent = opt.text;
        colorSelect.appendChild(optionElement);
    });

    colorSelect.addEventListener('change', (event) => {
        setLight(event.target.value);
    });

    traficLightsSelect.appendChild(colorSelect);
};

export default setTrafficLight;
