const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let cnt = 0;
    for (let i = 0; i < convertToBinary(num).length; i++) {
        cnt += +convertToBinary(num)[i];
    }
    return cnt;
};

export default getHammingWeight;
