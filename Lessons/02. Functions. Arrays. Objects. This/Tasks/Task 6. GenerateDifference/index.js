// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [...new Set(array)];

const generateDifference = (objOne, objTwo) => {
    let resultObject = { ...objOne, ...objTwo };
    findCoincidenceObject(objOne, objTwo, resultObject);
    findAddedKeys(objTwo, resultObject);

    return resultObject;
};

const findCoincidenceObject = (objOne, objTwo, result) => {
    for (let keyOne in objOne) {
        let coincidence = false;
        for (let keyTwo in objTwo) {
            if (keyOne === keyTwo) {
                if (objOne[keyOne] === objTwo[keyTwo])
                    result[keyOne] = 'unchanged';
                else
                    result[keyOne] = 'changed';

                coincidence = true;
                delete objTwo[keyTwo];
                break;
            }
        }

        if (!coincidence)
            result[keyOne] = 'deleted';
    }
}

const findAddedKeys = (objTwo, result) => {
    for (let key in objTwo)
        result[key] = 'added';
}

export default generateDifference;