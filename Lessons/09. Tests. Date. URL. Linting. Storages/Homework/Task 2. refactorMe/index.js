const extractParamsFromUrl = (urlStr) => {
    return new URL(urlStr).searchParams;
}

const CHANGES = {
    'coma' : ',',
    'dot' : '.',
    'semicolon' : ';',
    'apostrophe' : "'",
    "' " : "'"
}

const changeSymbols = (key, value) => {
    if (key === "text") {
        return ` ${value}`;
    }
    return CHANGES[key] || '';
}
const buildTextFromParams = (urlSearchParams) => {
    let result = '';
    for (let [key, value] of urlSearchParams) {
        result += changeSymbols(key,value);
    }
    return result.replace(/' /g, "'");
}
const getTextFromUrl = (url) => {
    const urlSearchParams = extractParamsFromUrl(url);
    return buildTextFromParams(urlSearchParams);
};

export default getTextFromUrl;
