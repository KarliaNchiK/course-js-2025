const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map(n => {
        if (n % CHECK_NUM === 0) {
            return "forty two!";
        }
        return n;
    })
};

export default transformFortyTwo;
