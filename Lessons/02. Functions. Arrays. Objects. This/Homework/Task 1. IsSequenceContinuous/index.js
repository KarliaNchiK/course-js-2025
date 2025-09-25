const isSequenceContinuous = (array) => {
    if (array.length < 2) return false;
    
    for (let i = 1; i < array.length; i++) {
       
        if (Math.abs(array[i] - array[i - 1]) !== 1) {
            return false;
        }
    }
    
    return true;
}

export default isSequenceContinuous;