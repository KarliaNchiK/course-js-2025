const getCharacterData = (characterId, key) => {

    return fetch("https://www.anapioficeandfire.com/api/characters/" + characterId)
        .then(response => response.json())
        .then(data => { return `${data["name"]}, ${key}: ${data[key]}`})
        .catch(error => console.error(error));


};

export default getCharacterData;

