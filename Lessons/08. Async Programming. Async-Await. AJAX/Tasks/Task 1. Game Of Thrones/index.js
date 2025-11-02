function getCharacterData(characterId, key) {
    const url = `https://www.anapioficeandfire.com/api/characters/${characterId}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const value = data[key];
            // Если value — массив, выводим как строку
            const valueStr = Array.isArray(value) ? value.join(', ') : value;
            return `${name}, ${key}: ${valueStr}`;
        });
}

export default getCharacterData;
