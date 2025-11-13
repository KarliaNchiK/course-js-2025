const setRotations = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourArrow = document.querySelector('.clocks__hour');
    const minuteArrow = document.querySelector('.clocks__minute');
    const secondArrow = document.querySelector('.clocks__second');

    const hoursAngle = hours * 30;
    const minutesAngle = minutes * 6;
    const secondsAngle = seconds * 6;

    hourArrow.style.transform = `rotate(${hoursAngle}deg)`;
    minuteArrow.style.transform = `rotate(${minutesAngle}deg)`;
    secondArrow.style.transform = `rotate(${secondsAngle}deg)`;
};

const runClocks = () => {
    setRotations();
    setInterval(setRotations, 1000);
};

export default runClocks;