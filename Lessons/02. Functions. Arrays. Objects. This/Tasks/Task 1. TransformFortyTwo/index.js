const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map(elem => {
        if (elem % 42 === 0) {
            return 'forty two!';
        }
        return elem;
    });
};
export default transformFortyTwo;
