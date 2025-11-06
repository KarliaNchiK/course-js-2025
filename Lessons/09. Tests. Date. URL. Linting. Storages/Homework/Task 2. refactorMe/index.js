const replacers = {
    'text=': ' ',
    'coma': ',',
    'dot': '.',
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'",
    '&': '',
    '=': '',
    "' ": "'",
};
const replaceKeyWords = (str) => {
    for (const key in replacers) {
        str = str.replaceAll(key, replacers[key]);
    }
    return str;
};

const getTextFromUrl = (url) => {
    const params = new URL(url).searchParams;
    return replaceKeyWords(params.toString());
};

export default getTextFromUrl;
