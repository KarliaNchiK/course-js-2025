const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let result = 0;
    while (num != 0) {
        result += (num % 2 === 1);
        num = Math.floor(num / 2);
    }
    return result;
};

export default getHammingWeight;
