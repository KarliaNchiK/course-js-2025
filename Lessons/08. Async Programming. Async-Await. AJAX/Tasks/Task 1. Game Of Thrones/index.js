const getCharacterData = (characterId, key) => {

    return new Promise((resolve, reject) => {
        const url = `https://www.anapioficeandfire.com/api/characters/` + characterId;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Http error ' + response.status);
                }

                return response.json();
            })
            .then(characterData => {
                const name = characterData.name;

                const keyData = characterData[key];

                if (keyData === undefined) {
                    reject(new Error(`key ` + keyData + ' не найден для персонажа ' + characterId));
                    return;
                }

                let formattedData;

                if (Array.isArray(keyData)) {
                    formattedData = keyData.filter(item => item !== "").join(", ");
                } else {
                    formattedData = keyData;
                }

                const result = name + ", " + key + ": " + formattedData;
                resolve(result);
            })
            .catch(error => {
                reject(new Error(`Не удалось получить данные: ` + error.message));
            });
    });
};

export default getCharacterData;
