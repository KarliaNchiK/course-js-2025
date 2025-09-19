// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {

    const obj = { ...objOne, ...objTwo };

    return Object.keys(obj).reduce((acc, key) => {
        if (!Object.hasOwn(objOne, key)) {
            acc[key] = 'added';

            return acc;
        }

        if (!Object.hasOwn(objTwo, key)) {
            acc[key] = 'deleted';

            return acc;
        }

        obj[key] = objOne[key] === objTwo[key]
            ? 'unchanged'
            : 'changed'

        return acc;
    }, {});
};

console.log(generateDifference(
    { name: 'Ilon', surname: 'Mask', age: 50 },
    { name: 'Ilon-genius', surname: 'Mask', children: [] },
));

export default generateDifference;
