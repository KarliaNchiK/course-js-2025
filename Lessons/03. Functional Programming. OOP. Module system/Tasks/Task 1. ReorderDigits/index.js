const reorderDigits = (type, ...numbers) => {
    if (type === 'desc') {
        return numbers.sort((a, b) => b - a);
    }
    return numbers.sort((a, b) => a - b);
};

export default reorderDigits;
