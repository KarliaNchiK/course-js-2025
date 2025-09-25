const getIntersectionUnion = (arrOne, arrTwo) => {
    let intersection = []
    let union = [...new Set([...arrOne, ...arrTwo])];
    for (let item of union) {
        if (arrOne.includes(item) && arrTwo.includes(item))
        {
            intersection.push(item);
        }
    }
    return { intersection, union };
};

export default getIntersectionUnion;
