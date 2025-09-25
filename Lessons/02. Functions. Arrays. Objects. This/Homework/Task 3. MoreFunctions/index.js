function moreFunction(number) {
    return function (array) {
        const result = []; // Можно и через map
        for (let i = 0; i < array.length; i++) {
            result.push(array[i] / number);
        }
        return result;
    };
}

export default moreFunction;