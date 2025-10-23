const LIGHTS = {
    red: { type: 'red', text: 'Красный' },
    yellow: { type: 'yellow', text: 'Желтый' },
    green: { type: 'green', text: 'Зеленый' },
};

// функция сбрасывает все цвета
const resetLights = () => {
    const lights = document.querySelectorAll('.traffic__lights-container span');
    lights.forEach(light => {
        light.classList.remove('red-light', 'yellow-light', 'green-light');
    });
};

// функция включает нужный цвет
const setLight = (type) => {
    resetLights(); // гасим все лампы
    const lights = document.querySelectorAll('.traffic__lights-container span');

    if (type === 'red') lights[0].classList.add('red-light');
    if (type === 'yellow') lights[1].classList.add('yellow-light');
    if (type === 'green') lights[2].classList.add('green-light');
};

// основная функция, создающая светофор
const setTrafficLight = () => {
    // 1. находим контейнеры
    const trafficLightsBlock = document.querySelector('.traffic__lights');
    const selectBlock = document.querySelector('.traffic__lights-select');

    // coздаём контейнер для ламп
    const lightsContainer = document.createElement('div');
    lightsContainer.classList.add('traffic__lights-container');

    // создаём 3 лампочки
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        lightsContainer.appendChild(span);
    }

    // добавляем контейнер ламп в блок
    trafficLightsBlock.appendChild(lightsContainer);

    // 2. cоздаём select
    const select = document.createElement('select');
    select.classList.add('form-select');

    // добавляем опции
    for (const key in LIGHTS) {
        const option = document.createElement('option');
        option.value = LIGHTS[key].type;
        option.textContent = LIGHTS[key].text;
        select.appendChild(option);
    }

    // добавляем select в блок
    selectBlock.appendChild(select);

    // 3.вешаем обработчик события
    select.addEventListener('change', (event) => {
        setLight(event.target.value);
    });

    // 4. по умолчанию — красный свет
    setLight('red');
};

export default setTrafficLight;
