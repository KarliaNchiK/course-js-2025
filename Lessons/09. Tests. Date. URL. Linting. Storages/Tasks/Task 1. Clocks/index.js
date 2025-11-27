const setRotations = (hours, minutes, seconds) => {
    const hoursContainer = document.querySelector('.clocks__hour');
    const minutesContainer = document.querySelector('.clocks__minute');
    const secondsContainer = document.querySelector('.clocks__second');

    const hoursAngle = hours * 30;
    const minutesAngle = minutes * 6;
    const secondsAngle = seconds * 6;

    hoursContainer.style.transform = `rotate(${hoursAngle}deg)`;
    minutesContainer.style.transform = `rotate(${minutesAngle}deg)`;
    secondsContainer.style.transform = `rotate(${secondsAngle}deg)`;
};

const runClocks = () => {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        setRotations(hours, minutes, seconds);
    }

    updateClock();
    setInterval(updateClock, 1000);
};

export default runClocks;
