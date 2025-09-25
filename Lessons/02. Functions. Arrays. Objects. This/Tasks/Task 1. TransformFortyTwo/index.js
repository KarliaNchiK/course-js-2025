const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map(item => {
       return item % CHECK_NUM === 0 ? 'forty two!' : item;
    });
};

export default transformFortyTwo;
