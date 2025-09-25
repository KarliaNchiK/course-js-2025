const isSequenceContinuous = (numbers) => {
    if (numbers.length <= 1) {
        return false;
    }
    let decreasingFlag = true;
    let ascendingFlag = true;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] - numbers[i + 1] !== 1) {
            decreasingFlag = false;
        }
        if (numbers[i] - numbers[i + 1] != -1) {
            ascendingFlag = false;
        }
    }
    return (decreasingFlag || ascendingFlag);

};

export default isSequenceContinuous;