const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let count = 0;
    for (let i = 0; i < convertToBinary(num).length; i += 1) {
        if (convertToBinary(num).at(i) === "1") {
            count += 1;
        }
    }
    return count;
};

export default getHammingWeight;
