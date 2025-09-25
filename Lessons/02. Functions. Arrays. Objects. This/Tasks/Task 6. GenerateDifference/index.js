// Возвращает копию элемента
// Зачем?
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const generateDifference = (objOne, objTwo) => {
    const keys = onlyUnique([...Object.keys(objOne), ...Object.keys(objTwo)]);
    const result = {};

    for (const key of keys) {
        const hasKeyOne = Object.hasOwn(objOne, key);
        const hasKeyTwo = Object.hasOwn(objTwo, key);

        if (!hasKeyOne && hasKeyTwo) {
            result[key] = 'added';
        } else if (hasKeyOne && !hasKeyTwo) {
            result[key] = 'deleted';
        } else {
            const valOne = objOne[key];
            const valTwo = objTwo[key];

            if (valOne === valTwo) {
                result[key] = 'unchanged';
            } else {
                result[key] = 'changed';
            }
        }
    }
    return result;
};

export default generateDifference;
