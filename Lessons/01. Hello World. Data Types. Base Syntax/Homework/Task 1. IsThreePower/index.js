const isThreePower = (num) => {
    // Начало
    if (num === 1){
        return true;
    }
    if (num <= 0){
        return false;
    }
    while (num % 3 === 0) {
        num /= 3;
    }

    return num === 1;
    // Конец
};

export default isThreePower;