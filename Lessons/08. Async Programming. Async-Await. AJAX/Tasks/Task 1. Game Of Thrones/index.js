const getCharacterData = (characterId, key) => {
    const url = `https://www.anapioficeandfire.com/api/characters/${characterId}`;

    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then(characterData => {
        const name = characterData.name;
        const keyData = characterData[key];

        return `${name}, ${key}: ${keyData}`;
    });
};

export default getCharacterData;
