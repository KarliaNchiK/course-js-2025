const getCharacterData = (characterId, key) => {
    const url = `https://www.anapioficeandfire.com/api/characters/${characterId}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            let value = data[key];

            // Если тип — массив (например, playedBy), берём первый элемент (по тестовым примерам)
            if (Array.isArray(value)) {
                value = value[0];
            }

            return `${data.name}, ${key}: ${value}`;
        });
};

export default getCharacterData;
