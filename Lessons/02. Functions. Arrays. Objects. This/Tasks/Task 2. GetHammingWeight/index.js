const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    const temp = convertToBinary(num);
    let result = 0;

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '1') result++;
        else continue;
    };
    return result;
};

export default getHammingWeight;
