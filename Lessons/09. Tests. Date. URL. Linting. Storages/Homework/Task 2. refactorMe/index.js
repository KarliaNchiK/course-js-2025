const TEXT_PARAM = 'text';
const APOSTROPHE_PARAM = 'apostrophe';

const PUNCTUATION_BY_PARAM = {
    coma: ',',
    dot: '.',
    space: ' ',
    semicolon: ';',
};

const getSearchParam= (url) => new URL(url).searchParams;


const buildTextFromParams = (params) => {
    let result = '';
    let glueNextWord = false;

    for(const [name, value] of params) {
        if (name === TEXT_PARAM && value) {
            if (glueNextWord) {
                // после апострофа без пробела they're
                result += value;
                glueNextWord = false;
            } else {
                result += ` ${value}`; // обычное слово с пробелом перед ним
            }
            continue;
        }

        if (name === APOSTROPHE_PARAM) {
            result += "'";
            glueNextWord = true;
            continue;
        }

        const punctuation = PUNCTUATION_BY_PARAM[name];
        if (punctuation !== undefined) {
            result += punctuation;
        }
    }
    return result;
};



const getTextFromUrl = (url) => {
    const params = getSearchParam(url);
    return buildTextFromParams(params);
};

export default getTextFromUrl;