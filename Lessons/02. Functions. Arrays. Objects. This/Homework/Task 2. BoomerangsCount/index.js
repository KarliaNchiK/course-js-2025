const getBoomerangsCount = (numbers) => {
    // Начало
    let count = 0;
    for (let i = 0; i < numbers.length - 2; i += 1) {
        const first = numbers[i];
        const second = numbers[i + 1];
        const third = numbers[i + 2];

        if (first === third && first !== second) {
            count += 1;
        }
    }
    return count;
    // Конец
};

export default getBoomerangsCount;