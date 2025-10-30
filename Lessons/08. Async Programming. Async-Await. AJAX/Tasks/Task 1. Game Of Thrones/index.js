const getCharacterData = (characterId, key) => {
    return fetch(`https://www.anapioficeandfire.com/api/characters/${characterId}`)
        .then(response => response.json())
        .then(character => {
            const name = character.name && character.name.length > 0 ? character.name : 'Unknown';

            let value = character[key];

            if (Array.isArray(value)) {
                value = value.join(', ');
            }
            return `${name}, ${key}: ${value}`;
        });
};

export default getCharacterData;
