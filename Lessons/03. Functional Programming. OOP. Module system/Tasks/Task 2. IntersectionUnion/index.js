const getIntersectionUnion = (arrOne, arrTwo) => {
    const setOne = new Set(arrOne);
    const setTwo = new Set(arrTwo);

    const intersection = [...setOne].filter(item => setTwo.has(item));

    const union = [...new Set([...arrOne, ...arrTwo])];
    
    return {
        intersection,
        union
    };
};

export default getIntersectionUnion;