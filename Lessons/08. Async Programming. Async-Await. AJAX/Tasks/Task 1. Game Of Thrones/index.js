import { request } from "http";

const getCharacterData = (characterId, key) => {
    let requestURL = `https://www.anapioficeandfire.com/api/characters/${characterId}`;
    let response = GetJSON(requestURL);
    return `${response.name}, ${key}: ${response.key}`;
};

const GetJSON = async (requestURL) => await fetch(requestURL, { method: 'GET' })

export default getCharacterData;
