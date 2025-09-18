// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {

    let firstObjKeys = Object.keys(objOne);
    let secondObjKeys = Object.keys(objTwo);


    let uniqueKeys = [...firstObjKeys, ...secondObjKeys];
    uniqueKeys = onlyUnique(uniqueKeys);

    let result = {};

    for (let key of uniqueKeys) {
        if (objOne.hasOwnProperty(key) && !objTwo.hasOwnProperty(key)) {
            result[key] = 'deleted';

        } else if (objTwo.hasOwnProperty(key) && !objOne.hasOwnProperty(key)) {
            result[key] = 'added';
        } else {
            if (objOne[key] === objTwo[key]) {
                result[key] = 'unchanged';
            } else {
                result[key] = 'changed';
            }
        }
    }
    return result;
};

export default generateDifference;
