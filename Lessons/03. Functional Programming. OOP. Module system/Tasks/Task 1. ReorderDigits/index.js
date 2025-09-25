const reorderDigits = (type, ...numbers) => {
    return numbers.sort((a, b) =>
    {
        return type === 'asc' ? a - b : b - a;
    });
};

export default reorderDigits;
