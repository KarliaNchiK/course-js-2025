const sumSquareDifference = (num) => {
    // Начало
    let quadroSum = 0;
    let sumQuadro = 0;
    for (let i = 1; i <= num; i += 1) {
        quadroSum += i ** 2;
        sumQuadro += i;
    }
    const result = quadroSum - sumQuadro ** 2;
    return Math.abs(result);
    // Конец
};

export default sumSquareDifference;