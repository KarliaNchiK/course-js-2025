const getCharacterData = async (characterId, key) => {
    const baseUrl = 'https://www.anapioficeandfire.com/api/characters/';
    return fetch(baseUrl + characterId)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return `${data.name}, ${key}: ${data[key]}`;
        });
};

export default getCharacterData;
