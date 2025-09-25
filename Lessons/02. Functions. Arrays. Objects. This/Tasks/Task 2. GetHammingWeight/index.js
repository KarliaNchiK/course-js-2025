const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    return convertToBinary(num)
        .split('')
        .filter(bit => bit === '1')
        .length;
};

export default getHammingWeight;
