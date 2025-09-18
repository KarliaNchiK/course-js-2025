const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
//        arr.map((x) => x % CHECK_NUM === 0);
        if (arr.at(i) % CHECK_NUM === 0) {
            arr[i] = "forty two!";
        }
    }
    return arr;
};

export default transformFortyTwo;
