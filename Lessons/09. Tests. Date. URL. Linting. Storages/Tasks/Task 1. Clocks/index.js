const setRotations = (time) => {
    const clocksHour = document.querySelector('.clocks__hour');
    const clocksMin = document.querySelector('.clocks__minute');
    const clocksSec = document.querySelector('.clocks__second');

    clocksHour.style = "transform: rotate(" + (time.hour * 30) + "deg);";
    clocksMin.style = "transform: rotate(" + (time.minute * 6) + "deg);";
    clocksSec.style = "transform: rotate(" + (time.second * 6) + "deg);";
};

const runClocks = () => {
    const updateClock = () => {
        const now = new Date();
        const currentTime = {
            hour: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds(),
        };
        setRotations(currentTime);
    };
    updateClock();
    setInterval(updateClock, 1000);
};

export default runClocks;