const getIntersectionUnion = (arrOne, arrTwo) => {
    const intersection = arrOne.filter((elem) => arrTwo.includes(elem));
    const union = [...new Set([...arrOne, ...arrTwo])];
    return {intersection, union};
};
export default getIntersectionUnion;
