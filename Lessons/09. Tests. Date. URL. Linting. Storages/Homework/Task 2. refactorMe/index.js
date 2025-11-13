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