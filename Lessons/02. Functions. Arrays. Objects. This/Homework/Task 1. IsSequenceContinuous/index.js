const isSequenceContinuous = (numbers) => {
    // Начало
    if (numbers.length < 2) {
        return false;
    }

        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i + 1] !== (numbers[i] + 1)) {
                return false;
            }
        }
    return true;
    // Конец
};

console.log(isSequenceContinuous([10, 11, 12, 13])); //true
console.log(isSequenceContinuous([-5, -4, -3]));         // true

console.log(isSequenceContinuous([10, 11, 12, 14, 15])); // false
console.log(isSequenceContinuous([1, 2, 2, 3]));         // false
console.log(isSequenceContinuous([7]));                  // false
console.log(isSequenceContinuous([]));                   // false
export default isSequenceContinuous;