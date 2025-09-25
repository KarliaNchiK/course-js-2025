const moreFunction = (number) => (array) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
        array[i] /= number;
    }
    return array;
};

export default moreFunction;