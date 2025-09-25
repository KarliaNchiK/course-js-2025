const reorderDigits = (type, ...numbers) => {
    return (type === "asc") ? numbers.sort((a, b) => a - b) : numbers.sort((a, b) => b - a);
};

export default reorderDigits;
