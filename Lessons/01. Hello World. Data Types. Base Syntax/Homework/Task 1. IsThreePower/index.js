const isThreePower = (num) => {
    for (let i = 1; i <= num; i *= 3) {
        if (i == num) {return true}
    }
    return false;
};

export default isThreePower;