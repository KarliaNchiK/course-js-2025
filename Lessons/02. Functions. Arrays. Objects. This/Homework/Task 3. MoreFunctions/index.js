const moreFunction = (number) => {
    // Начало
    return function(numbers) {
        return numbers.map(num => num / number);
    };

    // Конец
};

export default moreFunction;