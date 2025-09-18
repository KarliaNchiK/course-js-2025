// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {
    let keysOne = Object.keys(objOne);
    let keysTwo = Object.keys(objTwo);
    let allKeys = keysOne.concat(keysTwo);
    allKeys = onlyUnique(allKeys);
    let changes = {};
    allKeys.forEach(key =>{
        if (!Object.hasOwn(objOne,key)){
            changes[key] = 'added';
        }
        else if(!Object.hasOwn(objTwo,key)){
            changes[key] = 'deleted';
        }
        else if(Object.hasOwn(objOne,key) && Object.hasOwn(objTwo,key) && objOne[key] == objTwo[key]){
            changes[key] = 'unchanged';
        }
        else{
            changes[key] = 'changed';
        }
    })
    return changes;
};

export default generateDifference;
