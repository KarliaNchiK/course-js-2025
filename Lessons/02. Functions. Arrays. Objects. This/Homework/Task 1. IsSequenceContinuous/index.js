const isSequenceContinuous = (numbers) => {
    // Начало
    let result = 0;
    if (numbers.length <= 1) {
        return false;
    }
    for (let i = -1; i <= numbers.length; i += 1) {
        if (numbers[i + 1] + 1 === numbers[i + 2]) {
            result += 1;
        }
    }
    return result === (numbers.length - 1);
    // Конец
};

export default isSequenceContinuous;