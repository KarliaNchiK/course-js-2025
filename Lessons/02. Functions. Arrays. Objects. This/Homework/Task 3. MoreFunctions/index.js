const moreFunction = (number) => {
    return function(arr){
        return arr.map(num => num/number);
    }
};

export default moreFunction;