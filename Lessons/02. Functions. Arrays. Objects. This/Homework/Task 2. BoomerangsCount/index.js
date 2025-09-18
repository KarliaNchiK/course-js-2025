const getBoomerangsCount = (numbers) => {
    if(numbers.length <= 1){
        return 0;
    }
    let cnt = 0;
    for(let i = 2; i <= numbers.length; i++) {
        if(numbers[i] == numbers[i-2] && numbers[i]!=numbers[i-1]){
            cnt++;
        }
    }
    return cnt;
};

export default getBoomerangsCount;