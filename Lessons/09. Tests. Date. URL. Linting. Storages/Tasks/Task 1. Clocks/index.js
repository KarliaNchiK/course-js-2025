const setRotations = () => {
    const now = new Date();
    const hours = now.getHours();    // без остатка по модулю 12
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Угол часовой стрелки учитывает только часы, но по 24-часовому циклу,
    // что даёт значения от 0 до 690 градусов
    const hourDeg = 30 * hours;
    const minuteDeg = 6 * minutes;
    const secondDeg = 6 * seconds;

    const hourEl = document.querySelector('.clocks__hour');
    const minuteEl = document.querySelector('.clocks__minute');
    const secondEl = document.querySelector('.clocks__second');

    if (hourEl) hourEl.style.transform = `rotate(${hourDeg}deg)`;
    if (minuteEl) minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    if (secondEl) secondEl.style.transform = `rotate(${secondDeg}deg)`;
};

const runClocks = () => {
    setRotations(); // запустить сразу
    setInterval(setRotations, 1000); // обновлять каждую секунду
};

export default runClocks;
