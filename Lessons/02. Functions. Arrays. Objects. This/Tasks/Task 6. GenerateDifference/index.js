// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const generateDifference = (objOne, objTwo) => {
    // Получаем все уникальные ключи из обоих объектов
    const allKeys = onlyUnique([
        ...Object.keys(objOne),
        ...Object.keys(objTwo),
    ]);

    const result = {};

    // Проходим по всем ключам и определяем статус каждого
    allKeys.forEach(key => {
        const keyInObjOne = key in objOne;
        const keyInObjTwo = key in objTwo;

        if (keyInObjOne && keyInObjTwo) {
            // Ключ есть в обоих объектах
            const valueOne = getCopy(objOne[key]);
            const valueTwo = getCopy(objTwo[key]);

            // Сравниваем значения (учитывая, что это могут быть объекты)
            if (JSON.stringify(valueOne) === JSON.stringify(valueTwo)) {
                result[key] = 'unchanged';
            } else {
                result[key] = 'changed';
            }
        } else if (keyInObjOne && !keyInObjTwo) {
            // Ключ был в первом объекте, но удален во втором
            result[key] = 'deleted';
        } else if (!keyInObjOne && keyInObjTwo) {
            // Ключ добавлен во втором объекте
            result[key] = 'added';
        }
    });

    return result;
};

export default generateDifference;
