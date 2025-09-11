const sumSquareDifference = (num) => {
    let sum1 = 0;
    let sum2 = 0;
    for(let i=1;i<=num;i++){
        sum1+=i**2;
        sum2+=i
    }
    sum2=sum2**2;
    return Math.abs(sum1-sum2);
};

export default sumSquareDifference;