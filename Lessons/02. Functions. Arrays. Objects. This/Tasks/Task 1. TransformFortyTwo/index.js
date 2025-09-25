const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % CHECK_NUM === 0) {
            newArray.push("forty two!");
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

export default transformFortyTwo;
