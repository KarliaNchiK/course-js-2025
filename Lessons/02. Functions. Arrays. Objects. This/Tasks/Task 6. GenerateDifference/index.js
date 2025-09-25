// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const generateDifference = (objOne, objTwo) => {
    const allKeys = onlyUnique([...Object.keys(objOne), ...Object.keys(objTwo)]);

    return allKeys.reduce((result, key) => {
        if (!(key in objOne)) {
            result[key] = 'added';
        } else if (!(key in objTwo)) {
            result[key] = 'deleted';
        } else if (JSON.stringify(getCopy(objOne[key])) === JSON.stringify(getCopy(objTwo[key]))) {
            result[key] = 'unchanged';
        } else {
            result[key] = 'changed';
        }
        return result;
    }, {});
};

export default generateDifference;
