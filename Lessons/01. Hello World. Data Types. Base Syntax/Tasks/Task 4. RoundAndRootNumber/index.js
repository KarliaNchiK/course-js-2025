// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
    if(num < 0){
        return "error";
    }
    let numSqrt = Math.sqrt(num);
    numSqrt = numSqrt*ROUNDING_DEGREE;
    numSqrt = Math.floor(numSqrt)/100;
    return String(numSqrt);
}

export default roundAndRootNumber;
