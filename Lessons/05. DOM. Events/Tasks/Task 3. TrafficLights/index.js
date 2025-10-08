import {type} from "node:os";

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
    redLight.className = 'red-light';
    yellowLight.className = '';
    greenLight.className = '';
};

const setLight = (value) => {
    if (value === 'red') {
        redLight.className = 'red-light';
        yellowLight.className = '';
        greenLight.className = '';
    } else if (value === 'yellow') {
        redLight.className = '';
        yellowLight.className = 'yellow-light';
        greenLight.className = '';
    } else {
        redLight.className = '';
        yellowLight.className = '';
        greenLight.className = 'green-light';
    }

};

const setTrafficLight = () => {
    let traficLights = document.querySelector('.traffic__lights');
    let traficLightsContainer = document.createElement('div');
    traficLightsContainer.className = 'traffic__lights-container';

    traficLights.appendChild(traficLightsContainer);



    redLight.className = 'red-light';
    traficLightsContainer.appendChild(redLight);


    traficLightsContainer.appendChild(yellowLight);


    traficLightsContainer.appendChild(greenLight);



    let traficLightsSelect = document.querySelector('.traffic__lights-select');
    let select = document.createElement('select');

    let firstOption = document.createElement('option');
    firstOption.value = 'red';
    firstOption.textContent = 'Красный';
    let secondOption = document.createElement('option');
    secondOption.value = 'yellow';
    secondOption.textContent = 'Желтый';
    let thirdOption = document.createElement('option');
    thirdOption.value = 'green';
    thirdOption.textContent = 'Зеленый';

    select.addEventListener('change', (option) => {
        setLight(option.target.value);
    });
    traficLightsSelect.appendChild(select);
    select.append(firstOption, secondOption, thirdOption);
};

export default setTrafficLight;
