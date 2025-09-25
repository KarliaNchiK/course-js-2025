// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    const keysOne = Object.keys(objOne);
    const keysTwo = Object.keys(objTwo);
    const allKeys = onlyUnique([...keysOne, ...keysTwo]);

    return allKeys.reduce((acc, key) => {
        if (!(key in objOne)) {
            acc[key] = 'added';

            return acc;
        }

        if (key in objOne && !(key in objTwo)) {
            acc[key] = 'deleted';

            return acc;
        }

        const value1 = getCopy(objOne[key]);
        const value2 = getCopy(objTwo[key]);
        if (value1 === value2) {
            acc[key] = 'unchanged';
        } else {
            acc[key] = 'changed';
        }

        return acc;
    }, {});
};

export default generateDifference;
