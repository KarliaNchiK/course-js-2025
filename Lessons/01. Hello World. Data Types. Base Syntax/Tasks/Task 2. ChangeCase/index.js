const changeCase = (str) => {
    let newStr = '';
    for (let i = 0; i <= str.length - 1; i += 1) {
        if (str.at(i).toLowerCase() === str.at(i)) {
            newStr += str.at(i).toUpperCase();
        } else {
            newStr += str.at(i).toLowerCase();
        }
    }
    return newStr;
};

export default changeCase;
