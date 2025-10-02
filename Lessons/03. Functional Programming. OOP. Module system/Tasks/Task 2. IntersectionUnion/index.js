const getIntersectionUnion = (arrOne, arrTwo) => {
    const withoutCopyEl1 = arrOne.filter((item, i) => arrOne.indexOf(item) === i);
    const withoutCopyEl2 = arrTwo.filter((item, i) => arrTwo.indexOf(item) === i);

    const intersection = withoutCopyEl1.filter(item => withoutCopyEl2.includes(item));
    const union = [...withoutCopyEl1, ...withoutCopyEl2].filter((item, index, array) => array.indexOf(item) === index);

    return { intersection, union };
};

export default getIntersectionUnion;
