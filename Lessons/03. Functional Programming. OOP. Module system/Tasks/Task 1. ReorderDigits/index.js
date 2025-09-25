const reorderDigits = (type, ...numbers) => {

    if (type === "asc") {
        return [...numbers.sort((a,b) => a - b)];
    }
    else if (type === "desc") {
        return [...numbers.sort((a,b) => b - a)];
    }
};


console.log(reorderDigits('asc', 10, 322, 100, 2414, 3));    // [3, 10, 100, 322, 2414]
console.log(reorderDigits('desc', 10, 322, 100, 2414, 3));   // [2414, 322, 100, 10, 3]
console.log(reorderDigits('desc', 1));                       // [1]
console.log(reorderDigits('asc', -100, 204, 131));           // [-100, 131, 204]
console.log(reorderDigits('asc'));                           // []
export default reorderDigits;
