const getIntersectionUnion = (arrOne, arrTwo) => {
    let result = {}
    result.intersection = getIntersection(arrOne,arrTwo);
    result.union = getUnion(arrOne,arrTwo);
    return result;
};

const getUnion = (arrOne,arrTwo) => {
    let result = arrOne.concat(arrTwo);
    return getUnique(result);
}

const getIntersection = (arrOne, arrTwo) => {
    let result = [];
    arrOne.forEach(elem => {
        if (arrTwo.includes(elem)){
            result.push(elem);
        }
    })
    return getUnique(result);
}

const getUnique = (arr) => [ ...new Set(arr) ];

export default getIntersectionUnion;
