const reorderDigits = (type, ...numbers) => {
    if (numbers.length === 0) return [];

    return [...numbers].sort((a,b) => {
        return type === "asc" ? a - b : b - a;
    })
};

export default reorderDigits;
