const isSequenceContinuous = (numbers) => {
    if (numbers.length <= 1)
        return false;

    let previousValue = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] - previousValue != 1)
            return false;

        previousValue = numbers[i];
    }

    return true;
};

export default isSequenceContinuous;