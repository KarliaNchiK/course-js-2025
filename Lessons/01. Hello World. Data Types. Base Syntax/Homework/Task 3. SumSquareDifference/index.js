const sumSquareDifference = (num) => {
    let sum = 0;
    let sumOfSquares = 0;
    
    for (let i = 1; i <= num; i++) {
        sum += i;
        sumOfSquares += i * i;
    }
    
    return (sum * sum) - sumOfSquares;
};

export default sumSquareDifference;