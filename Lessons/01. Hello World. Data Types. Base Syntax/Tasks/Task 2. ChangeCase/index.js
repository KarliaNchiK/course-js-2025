const changeCase = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            result += char.toLowerCase();
        } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }

    return result;
};

export default changeCase;
