const getBoomerangsCount = (numbers) => {
    if (numbers.length === 0){
        return 0;
    }
    let lengthBoomer = 0;
    for(let i = 0;i < numbers.length - 2;i ++){
        if(numbers[i] === numbers[i + 2] && numbers[i] !== numbers[i + 1]){
            lengthBoomer ++;

        }


    }
    return lengthBoomer;
    // Начало

    // Конец
};

export default getBoomerangsCount;