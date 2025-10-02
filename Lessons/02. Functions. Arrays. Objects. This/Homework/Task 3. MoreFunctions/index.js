const moreFunction = (number) => {
    return (arr) => {
        // метод map = создание нов массива, применяя операции в () к каждому элементу исходного массива
        return arr.map(item => item / number);
    };
};

export default moreFunction;