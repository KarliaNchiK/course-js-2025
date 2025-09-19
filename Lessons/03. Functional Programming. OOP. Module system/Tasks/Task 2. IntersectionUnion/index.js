const getIntersectionUnion = (arrOne, arrTwo) => {
    arrOne = onlyUnique(arrOne);
    arrTwo = onlyUnique(arrTwo);
    let intersection = createIntersectionArray(arrOne, arrTwo);
    let union = [];
    arrOne.map(x => union.push(x));
    arrTwo.map(x => union.push(x));

    return {
        intersection: intersection,
        union: union
    }
};

const createIntersectionArray = (arrOne, arrTwo) => {
    let intersection = [];

    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                intersection.push(arrTwo[j]);
                arrTwo.splice(j, 1);
                break;
            }
        }
    }

    return intersection;
}

const onlyUnique = (array) => [...new Set(array)];

export default getIntersectionUnion;
