const REPLACEMENTS = {
    coma: ',',
    dot: '.',
    space: ' ',
    semicolon: ';',
    apostrophe: "'",
    ellipsis: '…',
};

const PUNCTUATION_CHARS = /[,.;…]/;
const APOSTROPHE_CHAR = "'";

const findParamsInUrl = urlStr => new URL(urlStr).searchParams;

const replaceKeyword = str => REPLACEMENTS[str] ?? str;

const getTextFromUrl = url => {
    const params = findParamsInUrl(url);
    let result = '';

    for (const [key, value] of params.entries()) {
        let replacement;

        if (key === 'text') {
            replacement = value;
        } else {
            replacement = replaceKeyword(key);
        }

        if (replacement === APOSTROPHE_CHAR) {
            result = result.trimEnd() + replacement;
        } else if (PUNCTUATION_CHARS.test(replacement)) {
            result = result.trimEnd() + replacement + ' ';
        } else {
            result += replacement + ' ';
        }
    }

    return ' ' + result.trim();
};

export default getTextFromUrl;