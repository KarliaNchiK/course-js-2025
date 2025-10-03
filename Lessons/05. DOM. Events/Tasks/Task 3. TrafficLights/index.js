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

let spans = [];

const resetLights = () => {
    spans.forEach(span => {
        span.classList.remove('red-light', 'yellow-light', 'green-light');
    });
};

const setLight = (type) => {
    resetLights();
    if (type === 'red') {
        spans[0].classList.add('red-light');
    } else if (type === 'yellow') {
        spans[1].classList.add('yellow-light');
    } else if (type === 'green') {
        spans[2].classList.add('green-light');
    }
};

const setTrafficLight = () => {
    const lightsContainer = document.querySelector('.traffic__lights');
    const selectContainer = document.querySelector('.traffic__lights-select');
    const container = document.createElement('div');
    container.classList.add('traffic__lights-container');
    spans = [0, 1, 2].map(() => document.createElement('span'));
    container.appendChild(spans[0]);
    container.appendChild(spans[1]);
    container.appendChild(spans[2]);
    spans[0].classList.add('red-light');

    lightsContainer.appendChild(container);
    const select = document.createElement('select');
    select.classList.add('form-select');

    Object.values(LIGHTS).forEach(light => {
        const option = document.createElement('option');
        option.value = light.type;
        option.textContent = light.text;
        select.appendChild(option);
    });

    selectContainer.appendChild(select);
    select.addEventListener('change', (e) => {
        setLight(e.target.value);
    });
};

export default setTrafficLight;
