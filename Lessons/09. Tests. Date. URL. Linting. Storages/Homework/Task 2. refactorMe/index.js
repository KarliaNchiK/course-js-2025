const text = ['text=', 'coma', 'dot', 'semicolon', 'apostrophe', '&', '=', "' "];
const symbols = [' ', ',', '.', ';', "'", '', '', "'"];

const replaceKeyWords = (str) => {
    for (let i = 0; i < text.length; i += 1) {
        str = str.replaceAll(text[i], symbols[i]);
    }
    return str;
};

const getTextFromUrl = (url) => {
    const params = new URL(url).searchParams;
    return replaceKeyWords(params.toString());
};

export default getTextFromUrl;
//
//
//
// const findParamsInUrl = (urlStr) => {
//     return new URL(urlStr).searchParams;
// };
//
// const replaceKeyWords = (str) => {
//     return str
//         .replaceAll('text=' || 'space', ' ')
//         .replaceAll('coma', ',')
//         .replaceAll('dot', '.')
//         .replaceAll('semicolon', ';')
//         .replaceAll('apostrophe', "'")
//         .replaceAll('&' || '=', '')
//         .replaceAll("' ", "'");
// };
//
// const getTextFromUrl = (url) => {
//     const params = findParamsInUrl(url);
//     return replaceKeyWords(params.toString());
// };
//
// export default getTextFromUrl;
//
//
//
