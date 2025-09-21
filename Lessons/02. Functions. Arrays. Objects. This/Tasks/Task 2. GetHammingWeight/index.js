const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {

    const binaryNum = convertToBinary(num);

    let count = 0;
    for (let i = 0; i <binaryNum.length; i ++) {
        if (binaryNum[i] === '1') {
            count++;
        }
    }
    return count;
};

console.log(getHammingWeight(101))
export default getHammingWeight;
