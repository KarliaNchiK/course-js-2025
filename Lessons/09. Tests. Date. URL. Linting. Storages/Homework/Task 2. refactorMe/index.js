const templateReplacement = {
    'text=': ' ',
    'coma': ',',
    'dot': '.',
    'space': ' ',
    'semicolon': ';',
    'apostrophe': "'",
    '&': '',
    '=': '',
    "' ": "'"
};

const getTextFromUrl = (url) => {
    const searchParams = new URL(url).searchParams;
    let songText = searchParams.toString();

    Object.keys(templateReplacement).forEach(keyWord => {
        songText = songText.replaceAll(keyWord, templateReplacement[keyWord])
    });

    return songText;
};

export default getTextFromUrl;

// const findParamsInUrl = (urlStr) => {
//     return new URL(urlStr).searchParams;
// }

// const replaceKeyWords = (str) => {
//     return str
//         .replaceAll('text=', ' ')
//         .replaceAll('coma', ',')
//         .replaceAll('dot', '.')
//         .replaceAll('space', ' ')
//         .replaceAll('semicolon', ';')
//         .replaceAll('apostrophe', "'")
//         .replaceAll('&', '')
//         .replaceAll('=', '')
//         .replaceAll("' ", "'");
// }

// const getTextFromUrl = (url) => {
//     const params = findParamsInUrl(url);
//     return replaceKeyWords(params.toString());
// };

// export default getTextFromUrl;
