const isThreePower = (num) => {
    // Начало
    if (num <= 0) return false;
    if (num === 1) return true;
    
    while (num > 1) {
        if (num % 3 !== 0) return false;
        num = num / 3;
    }
    return true;
    // Конец
};

export default isThreePower;