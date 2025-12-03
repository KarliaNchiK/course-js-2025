const setRotations = (hour, minute, second) => {
    // Получаем элементы один раз
    const hourElement = document.querySelector('.clocks__hour');
    const minuteElement = document.querySelector('.clocks__minute');
    const secondElement = document.querySelector('.clocks__second');
    
    // Устанавливаем повороты согласно тесту
    hourElement.style.transform = `rotate(${hour * 30}deg)`;
    minuteElement.style.transform = `rotate(${minute * 6}deg)`;
    secondElement.style.transform = `rotate(${second * 6}deg)`;
};

const runClocks = () => {
    // Сразу обновляем
    const now = new Date();
    setRotations(now.getHours(), now.getMinutes(), now.getSeconds());
    
    // Затем каждую секунду
    setInterval(() => {
        const now = new Date();
        setRotations(now.getHours(), now.getMinutes(), now.getSeconds());
    }, 1000);
};

export default runClocks;