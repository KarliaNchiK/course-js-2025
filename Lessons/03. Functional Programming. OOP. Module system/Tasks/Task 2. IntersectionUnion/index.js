const getIntersectionUnion = (arrOne, arrTwo) => {
    const oneSet = new Set(arrOne);
    const twoSet = new Set(arrTwo);

    const intersection = [...oneSet].filter(i => twoSet.has(i));
    const union = [...new Set([...arrOne, ...arrTwo])];

    return {
        intersection,
        union
    };
};

export default getIntersectionUnion;
