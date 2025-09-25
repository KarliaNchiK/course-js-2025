const getIntersectionUnion = (arrOne, arrTwo) => {
    const object = {
        intersection: [],
        union: []
    };
    for (let i = 0; i < arrOne.length; i++) {
        if (arrTwo.includes(arrOne[i]) && !object.intersection.includes(arrOne[i])) {
            object.intersection.push(arrOne[i]);
        }
    }
    for (let i = 0; i < arrOne.length; i++) {
        if (!object.union.includes(arrOne[i])) {
            object.union.push(arrOne[i]);
        }
    }

    for (let i = 0; i < arrTwo.length; i++) {
        if (!object.union.includes(arrTwo[i])) {
            object.union.push(arrTwo[i]);
        }
    }

    return object;
};
export default getIntersectionUnion;
