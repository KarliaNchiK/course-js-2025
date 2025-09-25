const sumSquareDifference = (num) => {
    // Начало
    let sumakv = 0;
    let kvsuma = 0;
    for (let i = 0; i < num; i++){
        sumakv += (i + 1) ** 2;
        kvsuma += i + 1;
    }

    return kvsuma ** 2 - sumakv;
    // Конец
};

export default sumSquareDifference;