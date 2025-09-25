const sumSquareDifference = (num) => {
   let sum = 0;
   let sumOfSquares = 0;

   for (let i = 1; i <= num; i++) {
    sum += i;
    sumOfSquares += i*i;
   }

   const squareOfSum = sum * sum;
   return squareOfSum - sumOfSquares;
};

export default sumSquareDifference;