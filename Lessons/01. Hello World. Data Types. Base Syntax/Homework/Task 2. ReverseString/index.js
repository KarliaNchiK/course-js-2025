const reverseString = (str) => {
    if (str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0];
};

export default reverseString;