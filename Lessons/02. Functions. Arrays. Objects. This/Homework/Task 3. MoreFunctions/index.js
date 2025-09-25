const moreFunction = (number) => {
    return function (array) {
        return array.map(elem => elem / number);
    };
};

export default moreFunction;