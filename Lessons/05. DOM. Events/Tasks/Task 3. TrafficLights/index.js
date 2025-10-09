/*const LIGHTS = {
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
*/

const setLight = (type) => {
    const container = document.querySelector('.traffic__lights');
    let innerContainer;
    if (document.querySelector('.traffic__lights-container') == null) {
        innerContainer = document.createElement('div');
        innerContainer.className = 'traffic__lights-container';
    } else {
        innerContainer = document.querySelector('.traffic__lights-container');
    }
    const redSpan = document.createElement('span');

    const yellowSpan = document.createElement('span');

    const greenSpan = document.createElement('span');
    switch (type) {
        case 'red':
            redSpan.className = 'red-light';
            break;
        case 'yellow':
            yellowSpan.className = 'yellow-light';
            break;
        case 'green':
            greenSpan.className = 'green-light';
            break;
        default:
            break;
    }
    innerContainer.appendChild(redSpan);
    innerContainer.appendChild(yellowSpan);
    innerContainer.appendChild(greenSpan);
    container.appendChild(innerContainer);
};

const resetLights = () => {
    setLight('red');
};

const setTrafficLight = () => {
    resetLights();
    const containerForSelect = document.querySelector('.traffic__lights-select');

    const select = document.createElement('select');

    const redSelect = document.createElement('option');
    redSelect.value = 'red';
    redSelect.textContent = 'Красный';

    const yellowSelect = document.createElement('option');
    yellowSelect.value = 'yellow';
    yellowSelect.textContent = 'Желтый';

    const greenSelect = document.createElement('option');
    greenSelect.value = 'green';
    greenSelect.textContent = 'Зеленый';

    select.appendChild(redSelect);
    select.appendChild(yellowSelect);
    select.appendChild(greenSelect);

    containerForSelect.appendChild(select);

    select.addEventListener('change', () => {
        let span = document.querySelector('span');
        span.remove();
        span = document.querySelector('span');
        span.remove();
        span = document.querySelector('span');
        span.remove();
        setLight(select.value);
    });
};

export default setTrafficLight;
