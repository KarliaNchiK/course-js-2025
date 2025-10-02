const getBoomerangsCount = (numbers) => {
    if (numbers.length < 3) {
        return 0;
    }
    
    let count = 0;
    
    for (let i = 0; i < numbers.length - 2; i++) {
        const first = numbers[i];
        const second = numbers[i + 1];
        const third = numbers[i + 2];
        
        if (first === third && first !== second) {
            count++;
        }
    }
    
    return count;
};

export default getBoomerangsCount;