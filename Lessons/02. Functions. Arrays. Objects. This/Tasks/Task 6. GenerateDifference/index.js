// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {

    const result = {};

    for (const key of Object.keys(objOne)) {
        if (!(key in objTwo)) {
            result[key] = 'deleted';
        } else if (JSON.stringify(objOne[key]) !== JSON.stringify(objTwo[key])) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    }

    for (const key of Object.keys(objTwo)) {
        if (!(key in objOne)) {
            result[key] = 'added';
        }
    }

    return result;
};

console.log(generateDifference(
    { name: 'Ilon', surname: 'Mask', age: 50 },
    { name: 'Ilon-genius', surname: 'Mask', children: [] },
));

export default generateDifference;
