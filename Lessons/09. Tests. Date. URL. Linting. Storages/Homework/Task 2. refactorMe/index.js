const SYMBOL_MAP = {
    'coma': ',',
    'dot': '.', 
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'"
};

const findParamsInUrl = (url) => {
    return new URL(url).searchParams;
};

const transformParamsToText = (params) => {
    let result = '';
    
    for (const [key, value] of params) {
        if (key === 'text') {
            result += ' ' + value;
        } else if (SYMBOL_MAP[key]) {
            result += SYMBOL_MAP[key];
        }
    }
    
    // Убираем пробел между апострофом и следующей буквой
    return result.replace(/' (\w)/g, "'$1");
};

const getTextFromUrl = (url) => {
    const params = findParamsInUrl(url);
    return transformParamsToText(params);
};

export default getTextFromUrl;