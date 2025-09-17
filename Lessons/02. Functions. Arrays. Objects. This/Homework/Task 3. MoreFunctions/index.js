const moreFunction = (number) => {
    let newFunction = (numbers) => {
        return numbers.map(num => num / number)
    }
    return newFunction;
};

export default moreFunction;