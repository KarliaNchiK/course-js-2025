let result = '';
let temp = '';

const reverseString = (str) => {
    if (result.length === str.length) {
        temp = result;
        result = '';
        return temp;
    }

    let pointer = str.length - result.length - 1;
    result += str[pointer];
    return reverseString(str);
};

//let a = reverseString('ab');
export default reverseString;