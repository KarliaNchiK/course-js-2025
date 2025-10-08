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
    const lights = document.querySelectorAll(".traffic__lights-container span");
    lights.forEach(light => {
        light.classList.remove('red-light', 'yellow-light','green-light');
    });
};

const setLight = (type) => {
    resetLights();

    const lights = document.querySelectorAll('.traffic__lights-container span');

    if (type === 'red') {
        lights[0].classList.add('red-light');
    } else if (type === 'yellow') {
        lights[1].classList.add('yellow-light');
    } else if (type === 'green') {
        lights[2].classList.add('green-light');
    }
};

const setTrafficLight = () => {
    const traficLightsContainer = document.querySelector(".traffic__lights");

    const lightsContainer = document.createElement('div');
    lightsContainer.className = "traffic__lights-container";

    const spanElementRed = document.createElement('span');
    const spanElementYellow = document.createElement('span');
    const spanElementGreen = document.createElement('span');

    lightsContainer.append(spanElementRed,spanElementYellow,spanElementGreen);
    traficLightsContainer.append(lightsContainer);


    const traficSelect = document.querySelector(".traffic__lights-select");


    const selectElement = document.createElement('select');
    selectElement.className = 'form-select';

    const optionRed = document.createElement('option');
    optionRed.value = 'red';
    optionRed.textContent = 'Красный';

    const optionYellow = document.createElement('option');
    optionYellow.value = 'yellow';
    optionYellow.textContent = 'Желтый'


    const optionGreen = document.createElement('option');
    optionGreen.value = 'green';
    optionGreen.textContent = 'Зеленый'

    selectElement.append(optionRed, optionYellow, optionGreen);
    traficSelect.append(selectElement);

    selectElement.addEventListener('change', (event) => {
        const selectValue = event.target.value;
        setLight(selectValue);
    });

    setLight('red');

};

export default setTrafficLight;
