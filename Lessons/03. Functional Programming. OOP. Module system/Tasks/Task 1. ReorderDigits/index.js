const reorderDigits = (type, ...numbers) => {
    if (numbers.length === 0) return [];

    const copy = [...numbers];
    return copy.sort((a, b) => {
        if (type === 'asc') return a - b;
        else return b - a;
    });
};

export default reorderDigits;
