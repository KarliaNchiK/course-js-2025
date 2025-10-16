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
    // 1️⃣ Находим контейнеры
    const trafficLightsBlock = document.querySelector('.traffic__lights');
    const selectBlock = document.querySelector('.traffic__lights-select');

    // 2️⃣ Создаём контейнер для ламп
    const lightsContainer = document.createElement('div');
    lightsContainer.classList.add('traffic__lights-container');

    // 3️⃣ Создаём 3 лампочки
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        lightsContainer.appendChild(span);
    }

    // 4️⃣ Добавляем контейнер ламп в блок
    trafficLightsBlock.appendChild(lightsContainer);

    // 5️⃣ Создаём select
    const select = document.createElement('select');
    select.classList.add('form-select');

    // 6️⃣ Добавляем опции
    for (const key in LIGHTS) {
        const option = document.createElement('option');
        option.value = LIGHTS[key].type;
        option.textContent = LIGHTS[key].text;
        select.appendChild(option);
    }

    // 7️⃣ Добавляем select в блок
    selectBlock.appendChild(select);

    // 8️⃣ Вешаем обработчик события
    select.addEventListener('change', (event) => {
        setLight(event.target.value);
    });

    // 9️⃣ По умолчанию — красный свет
    setLight('red');
};

export default setTrafficLight;
