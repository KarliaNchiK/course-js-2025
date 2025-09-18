const moreFunction = (number) => {
    const newFunction = (numbers) => {
        return numbers.map(x => x / number);
    }

    return newFunction;
};

export default moreFunction;