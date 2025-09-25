const changeCase = (str) => {
    let strResult = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            strResult += str[i].toUpperCase();
        } else {
            strResult += str[i].toLowerCase();
        }
    }
    return strResult;
};

export default changeCase;
