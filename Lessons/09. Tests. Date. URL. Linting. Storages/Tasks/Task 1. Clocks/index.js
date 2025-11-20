const setRotations = () => {
    const hourHand = document.querySelector('.clocks__hour');
    const minuteHand = document.querySelector('.clocks__minute');
    const secondHand = document.querySelector('.clocks__second');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = hours * 30;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
};

const runClocks = () => {
    setRotations();
    setInterval(setRotations, 1000);
};

export default runClocks;
