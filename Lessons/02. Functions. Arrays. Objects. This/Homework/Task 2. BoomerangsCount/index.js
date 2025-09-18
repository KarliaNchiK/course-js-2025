const getBoomerangsCount = (numbers) => {
    let counter = 0;
    for (let i=0;i<numbers.length-2;i++){
        if(numbers.at(i)===numbers.at(i+2) &&
        numbers.at(i) !== numbers.at(i+1)){
            counter += 1;
        }
    }
    return counter;
};

export default getBoomerangsCount;