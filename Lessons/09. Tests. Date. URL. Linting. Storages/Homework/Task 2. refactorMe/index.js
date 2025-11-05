const SYMBOL_MAPPINGS = {
    'coma': ',',
    'dot': '.',
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'"
};

const TEXT_PARAM = 'text=';
const PARAMS_SEPARATOR = '&';
const KEY_VALUE_SEPARATOR = '=';

const extractSearchParams = (urlString) => {
    return new URL(urlString).searchParams;
};

const decodeSymbol = (paramName) => {
    return SYMBOL_MAPPINGS[paramName] || '';
};

const processParam = ([key, value]) => {
    if (key === 'text') {
        return ` ${value}`;
    }
    return decodeSymbol(key);
};

const buildTextFromParams = (params) => {
    const textParts = [];

    for (const [key, value] of params) {
        const processedPart = processParam([key, value]);
        if (processedPart) {
            textParts.push(processedPart);
        }
    }

    return textParts.join('');
};

const normalizeSpaces = (text) => {
    return text.replace(/' /g, "'");
};

const getTextFromUrl = (url) => {
    const params = extractSearchParams(url);
    const rawText = buildTextFromParams(params);
    return normalizeSpaces(rawText);
};

export default getTextFromUrl;