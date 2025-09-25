const isThreePower = (num) => {
    if (num <= 0) return false; // Обрабатываем отрицательные числа и 0
    
    while (num > 1) {
        if (num % 3 !== 0) return false; // Если не делится нацело на 3
        num = Math.floor(num / 3);
    }
    
    return num === 1; // Если дошли до 1 - это степень тройки
};

export default isThreePower;