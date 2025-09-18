const getLastWordLength = (str) => {
    let word = '';
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        if (str.at(i) === ' ') {
            if (word !== '') {
                result = word;
            }
            word = '';
        } else {
            word += str.at(i);
        }
    }
    if (word !== '') {
        result = word;
    }
    return result.length;
};

export default getLastWordLength;
