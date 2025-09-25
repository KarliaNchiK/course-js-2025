// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    const allKeys = onlyUnique([...Object.keys(objOne), ...Object.keys(objTwo)]);
    const res = {};

    for (const key of allKeys) {
        const inFirst = key in objOne;
        const inSecond = key in objTwo;

        if (inFirst && !inSecond) {
            res[key] = 'deleted';
        } else if (!inFirst && inSecond) {
            res[key] = 'added';
        } else if (JSON.stringify(objOne[key]) != JSON.stringify(objTwo[key])) {
            res[key] = 'changed';
        } else {
            res[key] = 'unchanged';
        }
    }

    return res;

};

export default generateDifference;
