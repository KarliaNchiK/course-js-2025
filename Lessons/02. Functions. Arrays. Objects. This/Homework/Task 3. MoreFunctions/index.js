const moreFunction = (number) => {
    // Начало
    return (arr) => {
        return arr.map(elem => elem / number);
    };
    // Конец
};

export default moreFunction;