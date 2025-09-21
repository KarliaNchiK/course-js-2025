const moreFunction = (number) => {
    // Начало
    return (numbersArray) => {
        return numbersArray.map(num => num / number);
    }
    // Конец
};

const newFunction = moreFunction(2);  // получили функцию
console.log(newFunction([10, 11, 12, 20]));        // [5, 5.5, 6, 10]

export default moreFunction;