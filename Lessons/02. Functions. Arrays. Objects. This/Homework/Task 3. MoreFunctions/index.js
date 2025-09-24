const moreFunction = (number) => {
    return function(arr){
        return arr.map(elem => elem/number);
    }
};

export default moreFunction;