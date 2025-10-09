// степень округления числа
const roundAndRootNumber = (num) => {
    if (num < 0) {
        return 'error';
    }
    
    const root = Math.sqrt(num);
    const rounded = Math.floor(root * 100) / 100;
    
    return rounded.toString();
};

export default roundAndRootNumber;