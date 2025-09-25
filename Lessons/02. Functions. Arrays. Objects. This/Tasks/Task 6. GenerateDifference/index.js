// Возвращает копию элемента
function isExit(key, masKey) {
    return masKey.find(item => item === key) !== undefined;
}

const generateDifference = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const keys_main = {...obj1, ...obj2};
    const keys_Mass_main = Object.keys(keys_main);
    for (let i = 0; i < keys_Mass_main.length; i++){
        let k1 = isExit(keys_Mass_main[i], keys1);
        let k2 = isExit(keys_Mass_main[i], keys2);
        if (k1){
            if (k1 === k2){
                if (obj1[keys_Mass_main[i]] === obj2[keys_Mass_main[i]]){
                    keys_main[keys_Mass_main[i]] = 'unchanged';
                }else {
                    keys_main[keys_Mass_main[i]] = `changed`;
                }
            } else {
                keys_main[keys_Mass_main[i]] = `deleted`;
            }
        }

        if(k2 === true && k1 === false){
            keys_main[keys_Mass_main[i]] = `added`;
        }

    }

    return keys_main;
};

export default generateDifference;
