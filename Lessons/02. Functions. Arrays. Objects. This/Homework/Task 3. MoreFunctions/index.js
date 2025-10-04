const moreFunction = (number) => {
    return function (newFunction){
        const result = [];
        for(let i = 0; i < newFunction.length; i ++){
            let element = newFunction[i];
            result.push(element / number);
        }
        return result;
    }



};

export default moreFunction;