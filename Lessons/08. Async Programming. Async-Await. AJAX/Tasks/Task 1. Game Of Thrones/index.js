import { request } from "http";

const getCharacterData = (characterId, key) => {
    let requestURL = `https://www.anapioficeandfire.com/api/characters/${characterId}`;
    return fetch(requestURL, { method: 'GET' })
        .then(response => response.json())
        .then(data => `${data.name}, ${key}: ${data[key]}`)
};

export default getCharacterData;
