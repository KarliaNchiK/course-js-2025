// степень округления числа
const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => 
    {
        if (num < 0)
            return 'error';
        else if (num == 0)
            return '0';
        else
            return (Math.sqrt(num) - 0.005).toFixed(2);
    };

export default roundAndRootNumber;
