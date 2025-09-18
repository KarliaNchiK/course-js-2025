// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    const result = {};
    
    const allKeys = new Set([...Object.keys(objOne), ...Object.keys(objTwo)]);
    
    for (const key of allKeys) {
        if (!(key in objOne)) {
            result[key] = 'added';
        } else if (!(key in objTwo)) {
            result[key] = 'deleted';
        } else if (objOne[key] === objTwo[key]) {
            result[key] = 'unchanged';
        } else {
            result[key] = 'changed';
        }
    }
    
    return result;
};

export default generateDifference;
