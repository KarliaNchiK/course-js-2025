const reverseString = (str) => {
    // Начало
    if (str === '') {
        return '';
    }
    const len = str.length;
    // for (let i = str.length; i >= -1; i -= 1) {
    //     reversedStr += str.at(i);
    // }
    return str.at(len - 1) + reverseString(str.slice(0, len - 1));
    // Конец
};

export default reverseString;