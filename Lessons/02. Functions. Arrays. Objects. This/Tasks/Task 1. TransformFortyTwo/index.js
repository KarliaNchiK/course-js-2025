const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    return arr.map(number => number % 42 === 0 ? 'forty two!' : number);
};

export default transformFortyTwo;
