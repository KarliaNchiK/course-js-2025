const onlyUnique = (array) => [...new Set(array)];

const getIntersectionUnion = (arrOne, arrTwo) => {
    const result = {};
    const intersect = [];
    let union = [];
    const setArrOne = onlyUnique(arrOne);
    const setArrTwo = onlyUnique(arrTwo);
    union = onlyUnique(union.concat(setArrOne, setArrTwo));
    if (arrOne.length !== 0 && arrTwo.length !== 0) {
        for (let i = 0; i < setArrOne.length; i += 1) {
            for (let j = 0; j < setArrTwo.length; j += 1) {
                if (setArrOne[i] === setArrTwo[j]) {
                    intersect.push(setArrOne[i]);
                }
            }
        }
    }
    result.intersection = intersect;
    result.union = union;
    return result;
};

export default getIntersectionUnion;
