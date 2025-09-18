const getHammingWeight = (num) => {
    const binaryStr = num.toString(2);
    // Считаем количество '1' в строке
    let count = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === '1') {
            count++;
        }
    }
    return count;
};

export default getHammingWeight;
