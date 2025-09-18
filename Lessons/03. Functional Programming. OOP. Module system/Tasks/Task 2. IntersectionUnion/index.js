const getIntersectionUnion = (arrOne, arrTwo) => {
    arrOne = onlyUnique(arrOne);
    arrTwo = onlyUnique(arrTwo);
    let union = [];
    let intersection = [];

    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                union.push(arrTwo[j]);
                arrOne
            }
        }
    }
};

const onlyUnique = (array) => [...new Set(array)];

let a = getIntersectionUnion([5, 6, 6, 6, 8, 9], [3, 3, 4, 4, 5, 5, 8]);
//export default getIntersectionUnion;
