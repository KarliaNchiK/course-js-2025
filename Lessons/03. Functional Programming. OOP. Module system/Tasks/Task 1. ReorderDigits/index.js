const reorderDigits = (type, ...numbers) => {

    if (numbers.length === 0) {
        return [];
    }
    
    const numbersCopy = [...numbers];
    
    if (type === 'asc') {
        return numbersCopy.sort((a, b) => a - b);
    } else if (type === 'desc') {
        return numbersCopy.sort((a, b) => b - a);
    }
};

export default reorderDigits;