const getBoomerangsCount = (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length -2; i++) {
        if (numbers[i] === numbers[i + 2] && numbers[i] != numbers[i + 1]) {
            result++;
        }
    }
    return result;
};

export default getBoomerangsCount;