const getIntersectionUnion = (arrOne, arrTwo) => {
    const unionArray = [...arrOne, ...arrTwo];
    return {
        intersection: arrOne.filter((item) => arrTwo.includes(item)).sort(),
        union: [...new Set(unionArray.sort())],
    };
};

export default getIntersectionUnion;
