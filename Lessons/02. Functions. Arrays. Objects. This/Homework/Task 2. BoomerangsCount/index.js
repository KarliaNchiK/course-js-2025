const getBoomerangsCount = (numbers) => {
    // Начало
    if (numbers.length < 3) {return 0;}


    let count = 0;

    for (let i = 0; i < numbers.length - 2; i ++) {
        const first = numbers[i];
        const two = numbers[i+1];
        const three = numbers[i+2];

        if (first === three && first !== two){
            count++;
        }

    }
    return count;
    // Конец
};

console.log(getBoomerangsCount([10, 11, 12, 13]));        // 0
console.log(getBoomerangsCount([10, 11, 10, 13]));        // 1
console.log(getBoomerangsCount([9, 5, 9, 5, 1, 1, 1]));   // 2
console.log(getBoomerangsCount([9, 5, 4, 5, 4, 1, 4]));   // 3
console.log(getBoomerangsCount([]));                      // 0

export default getBoomerangsCount;