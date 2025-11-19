const getCharacterData = (characterId, key) => {
    return fetch(`https://www.anapioficeandfire.com/api/characters/${characterId}`)
        .then((response) => response.json())
        .then((character) => {
            return `${character.name}, ${key}: ${character[key]}`;
        });
};

export default getCharacterData;