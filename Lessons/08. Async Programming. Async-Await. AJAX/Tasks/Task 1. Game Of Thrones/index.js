const getCharacterData = (characterId, key) => {
    return fetch(`https://www.anapioficeandfire.com/api/characters/${characterId}`)
        .then((r) => {
            if (!r.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`)
            }
            return r.json();
        })
        .then((d) => {
            const name = d.name || "Unknown";
            const value = d[key];

            const formattedValue = Array.isArray(value) ? value.join(', ') : value;

            return `${name}, ${key}: ${formattedValue}`;
        })
        .catch((err) => {
            return `Ошибка: ${error.message}`;
        })
};

export default getCharacterData;
