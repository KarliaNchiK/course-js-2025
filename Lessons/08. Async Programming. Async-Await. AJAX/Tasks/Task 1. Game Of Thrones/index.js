const getCharacterData = async (characterId, key) => {
    const url = 'https://www.anapioficeandfire.com/api/characters/' + characterId;
    const response = await fetch(url);
    const json = await response.json();
    const name = json.name;
    const keyData = json[key];
    return `${name}, ${key}: ${keyData}`;
};

export default getCharacterData;
