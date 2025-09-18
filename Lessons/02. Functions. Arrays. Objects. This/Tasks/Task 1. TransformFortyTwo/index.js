const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map((num) => num%42===0 ? `forty two!`: num);
};

export default transformFortyTwo;
