const changeCase = (str) => {
    let n = str.length;
    let result = "";
    for (let i = 0; i < n; i++) {
        if (str.at(i).toLowerCase() === str.at(i)) {
            result += str.at(i).toUpperCase();
        } else {
            result += str.at(i).toLowerCase();
        }
    }
    return result;
}
export default changeCase;
