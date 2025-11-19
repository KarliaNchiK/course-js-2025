// Сопоставление "служебных" параметров с символами
const SPECIAL_SYMBOLS = {
    coma: ',',
    dot: '.',
    space: ' ',
    semicolon: ';',
    apostrophe: "'",
};

const getSearchParams = (url) => {
    return new URL(url).searchParams;
};

// Собираем текст из параметров URL
const buildTextFromParams = (searchParams) => {
    let result = '';
    let lastWasApostrophe = false;

    for (const [key, value] of searchParams.entries()) {
        if (key === 'text') {
            if (lastWasApostrophe) {
                result += value;
                lastWasApostrophe = false;
            } else {
                result += ` ${value}`;
            }
        } else if (SPECIAL_SYMBOLS[key]) {
            const symbol = SPECIAL_SYMBOLS[key];
            result += symbol;
            lastWasApostrophe = key === 'apostrophe';
        }
    }

    return result;
};

const getTextFromUrl = (url) => {
    const params = getSearchParams(url);
    return buildTextFromParams(params);
};

export default getTextFromUrl;
