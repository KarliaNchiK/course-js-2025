const getCharacterData = async (characterId, key) => {
    try {
        const response = await fetch(`https://www.anapioficeandfire.com/api/characters/${characterId}`);
        const character = await response.json();

        const name = character.name && character.name.length > 0 ? character.name : 'Unknown';
        let value = character[key];

        if (Array.isArray(value)) {
            value = value.join(', ');
        }

        return `${name}, ${key}: ${value}`;
    } catch (error) {
        throw new Error(`Failed to fetch character data: ${error.message}`);
    }
};

export default getCharacterData;