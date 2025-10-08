const reorderDigits = (direction, ...numbers) => {
    if (numbers.length === 0) {
        return [];
    }
    
    if (direction === 'asc') {
        return numbers.sort((a, b) => a - b);
    } else {
        return numbers.sort((a, b) => b - a);
    }
};

export default reorderDigits;