const generateDifference = (objOne, objTwo) => {
    const keysOne = Object.keys(objOne);
    const keysTwo = Object.keys(objTwo);
    const allKeys = [...new Set([...keysOne, ...keysTwo])];
    
    return allKeys.reduce((acc, key) => {
        const hasInOne = key in objOne;
        const hasInTwo = key in objTwo;
        
        if (hasInOne && !hasInTwo) {
            acc[key] = 'deleted';
        } else if (!hasInOne && hasInTwo) {
            acc[key] = 'added';
        } else if (objOne[key] !== objTwo[key]) {
            acc[key] = 'changed';
        } else {
            acc[key] = 'unchanged';
        }
        
        return acc;
    }, {});
};

export default generateDifference;