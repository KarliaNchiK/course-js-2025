const moreFunction = (number) => {
    // Начало
    const newFunction = (array) => {
        return array.map(o => o/number);
    }
    return newFunction;
    // Конец
};

export default moreFunction;