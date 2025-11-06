const getCharacterData = (characterId, key) => {
    const url = `https://www.anapioficeandfire.com/api/characters/${characterId}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(character => {
            const name = character.name || 'Unknown Character';
            const value = character[key];

            if (value === undefined || value === null || value === '') {
                return `${name}, ${key}: No data available`;
            }
            if (Array.isArray(value)) {
                return `${name}, ${key}: ${value.join(', ')}`;
            }

            return `${name}, ${key}: ${value}`;
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
            throw new Error(`Failed to fetch character data: ${error.message}`);
        });
};

export default getCharacterData;