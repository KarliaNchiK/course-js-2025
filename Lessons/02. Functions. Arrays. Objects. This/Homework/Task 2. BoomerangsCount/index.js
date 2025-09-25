const getBoomerangsCount = (numbers) => {
    let cnt = 0;
    for (let i = 0; i < numbers.length - 2; i++) {
        if (numbers[i] === numbers[i + 2] && numbers[i] !== numbers[i + 1]) {
            cnt++;
        }
    }
    return cnt;
};

export default getBoomerangsCount;