// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    let firstObjKeys = objOne.keys;
    let secondObjKeys = objTwo.keys;
    let result = {};
    for (let key in firstObjKeys) {
        if (!(key in secondObjKeys)) {}
    }
};

export default generateDifference;
