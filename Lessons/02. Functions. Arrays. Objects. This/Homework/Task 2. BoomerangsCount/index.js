const getBoomerangsCount = (numbers) => {
    let boomerangsCount = 0;

    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i - 1] === numbers[i + 1] && numbers[i - 1] !== numbers[i])
            boomerangsCount++;
    }

    return boomerangsCount;
};

export default getBoomerangsCount;