const sumSquareDifference = (num) => {
    // Начало
    let sum = 0;
    let sumSquares = 0;
    
    for (let i = 1; i <= num; i++) {
        sum += i;
        sumSquares += i * i;
    }
    
    const squareSum = sum * sum;
    return squareSum - sumSquares;
    // Конец
};

export default sumSquareDifference;