const getBoomerangsCount = (arg) => {
    let count = 0;
    for (let i = 2; i < arg.length; i++){
        if (arg[i] === arg[i - 2] && arg[i] !== arg[i - 1]){
            count += 1;
        }
    }
    return count;
};

export default getBoomerangsCount;