const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    const stringBinary = convertToBinary(num);
    let count = 0;
    for (let i = 0; i < stringBinary.length; i++) {
        count += +stringBinary[i];
    }
    return count;
};

export default getHammingWeight;
