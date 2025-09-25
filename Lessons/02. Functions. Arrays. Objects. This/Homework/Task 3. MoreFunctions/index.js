const moreFunction = (number) => {
    return (arr) => {
        return arr.map(i => i/number);
    }
};

export default moreFunction;