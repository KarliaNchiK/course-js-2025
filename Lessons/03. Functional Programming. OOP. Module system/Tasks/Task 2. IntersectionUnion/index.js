const getIntersectionUnion = (arrOne, arrTwo) => {

    let setOne = new Set(arrOne);
    let setTwo = new Set(arrTwo);

    const intersection = [...setOne].filter(item  => setTwo.has(item));
    const union = [...new Set([...arrOne, ...arrTwo])];

    return {
        intersection,
        union
    }
};

console.log(getIntersectionUnion([5, 6, 6, 6, 8, 9], [3, 3, 4, 4, 5, 5, 8]));
export default getIntersectionUnion;
