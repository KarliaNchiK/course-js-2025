const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    let result = [];
    for (let ind of arr){
        if (ind % 42 === 0) {
            result.push("forty two!")
        }
        else {result.push(ind)}
    }
    return result;
};

export default transformFortyTwo;
