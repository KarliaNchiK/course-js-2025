const moreFunction = (number) => {
    const inf = (arg) =>{
        return arg.map(num => num/number);
    }
    return inf;
};

export default moreFunction;