const isThreePower = (num) => {
    // Начало
    let flag = true;
    if (num === 0) {
        return false;
    }
    while (flag && num >= 1) {
        if (num === 1) {
            console.log(true);
            flag = true;
            return true;
        }
        if (num % 3 === 0) {
            num /= 3;
        } else {
            console.log(false);
            flag = false;
            return false;
        }
    }
    // Конец
};

export default isThreePower;