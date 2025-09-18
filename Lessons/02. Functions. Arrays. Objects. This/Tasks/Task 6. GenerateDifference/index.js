//Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

//Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const chooseResult = (arr1, arr2, key, count, result) => {
    if (arr1[count] === 'none') {
        result[key] = 'added';
    } else if (arr2[count] === 'none') {
        result[key] = 'deleted';
    } else if (arr1[count] !== 'none' && arr2[count] !== 'none') {
        if (arr1[count] !== arr2[count]) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    }
};

const generateDifference = (objOne, objTwo) => {
    const arrObjOne = [];
    const arrObjTwo = [];
    const result = {};
    const keys1 = Object.keys(objOne);
    const keys2 = Object.keys(objTwo);
    const keys = onlyUnique([...keys1, ...keys2]);
    for (let i = 0; i < keys.length; i += 1) {
        if (objOne[keys[i]] === undefined) {
            arrObjOne[i] = 'none';
        } else {
            arrObjOne[i] = objOne[keys[i]];
        }
        if (objTwo[keys[i]] === undefined) {
            arrObjTwo[i] = 'none';
        } else {
            arrObjTwo[i] = objTwo[keys[i]];
        }
    }
    for (let j = 0; j < keys.length; j += 1) {
        chooseResult(arrObjOne, arrObjTwo, keys.at(j), j, result);
    }
    return result;
};

export default generateDifference;
