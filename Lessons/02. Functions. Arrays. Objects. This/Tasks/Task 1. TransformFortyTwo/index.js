
const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {

    const array = arr.map((element) => element);

    for (let i = 0; i < array.length; i++ ) {
        if (array[i] % CHECK_NUM === 0 ) {
            array[i] = "forty two!";
        }
    }
    return array;
};

console.log(transformFortyTwo([1,561,123,1526,42,42,9123,4242]));
export default transformFortyTwo;
