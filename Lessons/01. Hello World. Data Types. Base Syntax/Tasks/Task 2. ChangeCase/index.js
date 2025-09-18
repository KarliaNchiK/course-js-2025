const changeCase = (str) => {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char >= 'A' && char <= 'Z') {
            result += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    
    return result;
};

export default changeCase;
