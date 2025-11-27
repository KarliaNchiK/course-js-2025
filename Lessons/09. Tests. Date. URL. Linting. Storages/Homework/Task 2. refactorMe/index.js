const findParamsInUrl = url => new URL(url).searchParams;

const REPLACEMENTS = [
    ['text=', ' '],
    ['coma', ','],
    ['dot', '.'],
    ['space', ' '],
    ['semicolon', ';'],
    ['apostrophe', "'"],
    ['&', ''],
    ['=', ''],
    ["' ", "'"],
];

const replaceKeyWords = str =>
    REPLACEMENTS.reduce(
        (acc, [from, to]) => acc.replaceAll(from, to),
        str
    );

const getTextFromUrl = url => {
    const params = findParamsInUrl(url);
    return replaceKeyWords(params.toString());
};

export default getTextFromUrl;
