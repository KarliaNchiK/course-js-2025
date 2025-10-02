const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    const binaryString = convertToBinary(num);
    
    // reduce для агрегации
    return binaryString.split('').reduce((acc, char) => {
        if (char === '1') {
            return acc + 1;
        }
        return acc;
    }, 0);
};

export default getHammingWeight;