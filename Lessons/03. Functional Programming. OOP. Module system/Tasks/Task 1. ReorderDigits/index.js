const reorderDigits = (type, ...numbers) => {
    if (numbers === undefined) {
        return [];
    }
    if (type === 'asc') {
        return numbers.sort((a, b) => a - b);
    }

    if (type === 'desc') {
        return numbers.sort((a, b) => b - a);
    }

    return [];
};
export default reorderDigits;
