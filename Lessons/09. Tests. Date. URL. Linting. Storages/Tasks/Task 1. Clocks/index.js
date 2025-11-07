const setRotations = () => {
    const date = new Date();
    const elementSpanClockHour = document.querySelector(".clocks__hour");
    const elementSpanClockMinute = document.querySelector(".clocks__minute");
    const elementSpanClockSecond = document.querySelector(".clocks__second");

    elementSpanClockHour.style.transform = `rotate(${(30 * date.getHours())}deg)`;
    elementSpanClockMinute.style.transform = `rotate(${(6 *  date.getMinutes())}deg)`;
    elementSpanClockSecond.style.transform = `rotate(${(6 *  date.getSeconds())}deg)`;
};

const runClocks = () => {
    setRotations();
    setInterval(setRotations, 1000);
};

export default runClocks;