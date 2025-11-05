const setRotations = () => {
    const currentDate = new Date();
    const hoursArrow = currentDate.getHours();
    const minutesArrow = currentDate.getMinutes();
    const secondsArrow = currentDate.getSeconds();

    const hoursAngle = 30 * hoursArrow;
    const minutesAngle = 6 * minutesArrow;
    const secondsAngle = 6 * secondsArrow;

    const currentSecondsAngle = document.querySelector('.clocks__second');
    const currentMinutesAngle = document.querySelector('.clocks__minute');
    const currentHoursAngle = document.querySelector('.clocks__hour');

    if (currentSecondsAngle) {
        currentSecondsAngle.style.transform = `rotate(${secondsAngle}deg)`;
    }
    if (currentMinutesAngle) {
        currentMinutesAngle.style.transform = `rotate(${minutesAngle}deg)`;
    }
    if (currentHoursAngle) {
        currentHoursAngle.style.transform = `rotate(${hoursAngle}deg)`;
    }
};

const runClocks = () => {
    setRotations();
    setInterval(setRotations, 1000);
};
export default runClocks;