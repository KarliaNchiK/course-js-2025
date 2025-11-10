const getCharacterData = (characterId, key) => {
    return fetch(`https://www.anapioficeandfire.com/api/characters/${characterId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(character => {
            const name = character.name;
            let value = character[key];
            
            // Обработка массива playedBy (берем первый элемент)
            if (Array.isArray(value) && value.length > 0) {
                value = value[0];
            }
            
            // Если значение пустое или массив пустой
            if (!value || (Array.isArray(value) && value.length === 0)) {
                value = '';
            }
            
            return `${name}, ${key}: ${value}`.trim();
        });
};

export default getCharacterData;