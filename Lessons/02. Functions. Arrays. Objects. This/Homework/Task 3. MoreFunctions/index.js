const moreFunction = (number) => {

    return (array) => {
        for(let i = 0; i < array.length; i++){
            array[i] /= number;
        }
        return array;
    };
};

export default moreFunction;