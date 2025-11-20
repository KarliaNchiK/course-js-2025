const SYMBOL_MAP = {
    coma: ',',
    dot: '.',
    space: ' ',
    semicolon: ';',
    apostrophe: "'",
};

const getSearchParams = (urlStr) => new URL(urlStr).searchParams;

const buildTextFromParams = (params) => {
    let result = '';

    for (const [key, value] of params.entries()) {
        if (key === 'text') {
            // Добавляем пробел перед каждым текстовым параметром
            if (result.endsWith("'")) {
                // если перед этим был апостроф, не добавляем пробел
                result += value;
            } else {
                result += ` ${value}`;
            }
        } else if (SYMBOL_MAP[key]) {
            result += SYMBOL_MAP[key];
        }
    }

    return result;
};

const getTextFromUrl = (url) => {
    const params = getSearchParams(url);
    return buildTextFromParams(params);
};

export default getTextFromUrl;
