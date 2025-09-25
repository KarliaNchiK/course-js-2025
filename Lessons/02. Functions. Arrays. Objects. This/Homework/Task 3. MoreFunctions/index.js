const moreFunction = (number) => {
    return (array) => {
        return array.map(item => item / number);
    };
};

export default moreFunction;