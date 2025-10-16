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

let lightSpans = [];

const resetLights = () => {
    if (!lightSpans || lightSpans.length === 0) return;
    lightSpans.forEach((span) => {
        span.classList.remove('red-light', 'yellow-light', 'green-light');
    });
};

const setLight = (type) => {
    if (!lightSpans || lightSpans.length === 0) return;

    const classMap = {
        red: 'red-light',
        yellow: 'yellow-light',
        green: 'green-light',
    };

    resetLights();

    const indexMap = {
        red: 0,
        yellow: 1,
        green: 2,
    };

    const idx = indexMap[type];
    if (idx === undefined) return;

    lightSpans[idx].classList.add(classMap[type]);
};

const setTrafficLight = () => {
    const lightsWrapper = document.querySelector('.traffic__lights');
    const selectWrapper = document.querySelector('.traffic__lights-select');

    if (!lightsWrapper || !selectWrapper) return;

    const container = document.createElement('div');
    container.classList.add('traffic__lights-container');

    const red = document.createElement('span');
    const yellow = document.createElement('span');
    const green = document.createElement('span');

    lightSpans = [red, yellow, green];

    container.append(red, yellow, green);
    lightsWrapper.appendChild(container);

    const select = document.createElement('select');
    select.classList.add('form-select');

    Object.values(LIGHTS).forEach(({ type, text }) => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = text;
        select.appendChild(option);
    });

    selectWrapper.appendChild(select);

    select.addEventListener('change', (e) => {
        setLight(e.target.value);
    });

    setLight('red');
};

export default setTrafficLight;
