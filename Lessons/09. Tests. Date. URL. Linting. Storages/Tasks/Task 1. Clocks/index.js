const SECONDS_IN_12_HOURS = 12 * 60 * 60; // 43200
let state = 0; // количество секунд в текущем 12-часовом цикле

const setRotations = () => {
    const hourEl = document.querySelector('.clocks__hour');
    const minuteEl = document.querySelector('.clocks__minute');
    const secondEl = document.querySelector('.clocks__second');

    const hours = Math.floor(state / 3600) % 12;
    const minutes = Math.floor((state % 3600) / 60);
    const seconds = state % 60;

    const hourDeg = hours * 30;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;
};

const runClocks = () => {
    const now = new Date();

    state = (now.getHours() % 12) * 3600 + now.getMinutes() * 60 + now.getSeconds();
    setRotations();

    setInterval(() => {
        state += 1;

        if (state >= SECONDS_IN_12_HOURS) {
            state = 0;
        }

        setRotations();
    }, 1000);
};

export default runClocks;
