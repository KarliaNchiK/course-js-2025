const symbols = {
    'coma': ',',
    'dot': '.',
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'"
};

const getSearchParams = (urlString) => new URL(urlString).searchParams;

const processParam = (key, value) => {
    if (key === 'text') return ` ${value}`
    return symbols[key] || '';
};

const getTextFromUrl = (url) => {
    const params = getSearchParams(url);
    let result = '';

    for (const [key, value] of params) {
        result += processParam(key, value);
    }

    return result.replace(/' /g, "'");
};

export default getTextFromUrl;
