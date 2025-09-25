const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length <= 1) {
        return false;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1] + 1) {
            return false;
        }
    }
    return true;
    // Конец
};

export default isSequenceContinuous;