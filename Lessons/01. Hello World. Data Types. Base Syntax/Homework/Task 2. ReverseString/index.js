const reverseString = (str) => {

    let newstr = "";
    // Начало
    for (let i = 0; i < str.length; i++){
        newstr += str[str.length - i - 1];

    }

    return newstr;
    // Конец
};
export default reverseString;