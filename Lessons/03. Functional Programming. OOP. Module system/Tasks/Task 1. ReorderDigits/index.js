const reorderDigits = (type, ...numbers) => {
    if (numbers.length === 0) {
        return [];
    }
    if (type === 'asc') {
        numbers.sort((a, b) => a - b);
    } else numbers.sort((a, b) => b - a);
    return numbers;
};

export default reorderDigits;
