const transformFortyTwo = (arr) => arr.map((num) => (num % 42 === 0 ? 'forty two!' : num));

export default transformFortyTwo;
