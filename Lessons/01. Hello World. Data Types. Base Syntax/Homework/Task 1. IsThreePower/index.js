const isThreePower = (num) => {
    if (num <= 0) {
        return false;
    }
    
    while (num % 3 === 0) {
        num /= 3;
    }
    
    return num === 1;
};

export default isThreePower;