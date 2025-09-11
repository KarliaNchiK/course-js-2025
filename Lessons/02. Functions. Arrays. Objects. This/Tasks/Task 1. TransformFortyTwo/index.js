const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map(o => o % CHECK_NUM === 0 ? "forty two!" : o);
};

export default transformFortyTwo;
