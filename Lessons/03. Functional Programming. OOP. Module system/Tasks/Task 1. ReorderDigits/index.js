const reorderDigits = (type, ...numbers) => {
    // Можно добавить throw new Error
    const sorted = [...numbers].sort((a, b) => {
        return type === 'asc' ? a - b : b - a;
    });
    return sorted;
};

export default reorderDigits;
