const reverseString = (str) => {
    if(str.length <= 1){
        return str;
    }
    return reverseString(str.slice(str.length/2)) + reverseString(str.slice(0, str.length/2));
};

export default reverseString;