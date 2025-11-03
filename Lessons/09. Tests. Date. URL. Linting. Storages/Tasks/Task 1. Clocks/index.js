const setRotations = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = 30 * hours;
    const minuteAngle = 6 * minutes;
    const secondAngle = 6 * seconds;

    const hourHand = document.querySelector('.clocks__hour');
    const minuteHand = document.querySelector('.clocks__minute');
    const secondHand = document.querySelector('.clocks__second');

    if (hourHand) {
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
    }

    if (minuteHand) {
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    }

    if (secondHand) {
        secondHand.style.transform = `rotate(${secondAngle}deg)`;
    }
};

const runClocks = () => {
    setRotations();
    setInterval(setRotations, 1000);
};
export default runClocks;