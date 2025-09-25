const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map(arrs => {
        if (arrs % CHECK_NUM === 0) {
            return 'forty two!';
        }
        return arrs;
    });
};

export default transformFortyTwo;
