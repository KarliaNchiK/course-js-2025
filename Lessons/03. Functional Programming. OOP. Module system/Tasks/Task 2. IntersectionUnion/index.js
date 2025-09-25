const getIntersectionUnion = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [...set1].filter(x => set2.has(x));
    const unionSet = new Set([...arr1, ...arr2]);
    const union = [...unionSet];

    return { intersection, union };
};

export default getIntersectionUnion;
