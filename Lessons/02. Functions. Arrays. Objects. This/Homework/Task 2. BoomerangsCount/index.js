const getBoomerangsCount = (numbers) => {
    // Начало
    let len = 0;
    if (numbers.length === 0) {
        return 0;
    }
    for (let start = 0; start <= numbers.length; start += 1) {
        const end = start + 3;
        const sliced = numbers.slice(start, end);
        if (sliced.length === 3 && sliced[0] === sliced[2] && sliced[0] !== sliced[1]) {
            len += 1;
        }
    }
    return len;
    // Конец
};

export default getBoomerangsCount;