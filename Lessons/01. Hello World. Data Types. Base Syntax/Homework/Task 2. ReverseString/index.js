let result = '';

const reverseString = (str) => {
    if (result.length === str.length)
        return result;

    let pointer = str.length - result.length - 1;
    result += str[pointer];
    return reverseString(str);
};

let a = reverseString('');
export default reverseString;