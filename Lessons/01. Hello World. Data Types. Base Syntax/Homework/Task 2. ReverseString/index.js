const reverseString = (str) => {
    let len = str.length;
    if (len === 0){
        return '';
    }
    if (len===1){
        return str.at(0);
    }
    return str.at(len-1)+reverseString(str.slice(0,len-1));
};

export default reverseString;