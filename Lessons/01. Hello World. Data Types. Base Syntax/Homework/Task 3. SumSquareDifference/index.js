const sumSquareDifference = (num) => {
    let sumsSquare = 0;
    let squareSum = 0;

    for (let i = 1; i <= num; i++)
    {
        sumsSquare += i ** 2;
        squareSum += i;
    }

    squareSum *= squareSum;
    return squareSum - sumsSquare;
};
export default sumSquareDifference;