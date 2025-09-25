const isSequenceContinuous = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== 1) {
            return false;
        }
    }
    return numbers.length > 1;
};

export default isSequenceContinuous;