const sumSquareDifference = (num) => {
    let sum = 0;
    let sumOfStep = 0;
    for(let i = 1; i <= num; i ++){
        sum += i;
        sumOfStep += i * i;

    }
    return sum * sum - sumOfStep;

};

export default sumSquareDifference;