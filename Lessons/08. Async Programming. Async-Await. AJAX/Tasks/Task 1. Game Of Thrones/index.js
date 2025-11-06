const getCharacterData = (characterId, key) => {
    const url = 'https://www.anapioficeandfire.com/api/characters/';

    return fetch(url + characterId)
        .then(response => {
            if (!response.ok) { throw new Error(`HTTP error ${response.status}`); }
            return response.json();
        })
        .then(data => { return `${data.name}, ${key}: ${data[key]}`; })
};

export default getCharacterData;
