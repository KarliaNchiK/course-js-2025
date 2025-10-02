const reverseString = (str) => {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str.slice(0, 1);




};

export default reverseString;