const sumSquareDifference = (num) => {
    let sumSquare = 0;
    let squareSum = 0;
    for (let i = 1; i <= num; i++) {
        squareSum += i;
        sumSquare += i*i;
    }
    squareSum = squareSum * squareSum;
    return squareSum - sumSquare;
};

export default sumSquareDifference;