// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
    if (num === 0) {
        console.log(0);
        return '0';
    } else if (num < 0) {
        console.log('error');
        return 'error';
    } else if (num > 0) {
        console.log(Math.floor((Math.sqrt(num) * ROUNDING_DEGREE)) / ROUNDING_DEGREE);
        return String(Math.floor((Math.sqrt(num) * ROUNDING_DEGREE)) / ROUNDING_DEGREE);
    }
};

export default roundAndRootNumber;
