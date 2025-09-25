// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
    if (num < 0) {return 'error'}
    let result = (Math.trunc(Math.sqrt(num) * ROUNDING_DEGREE) )/ ROUNDING_DEGREE + '';
    return result;
};

export default roundAndRootNumber;
