const getLastWordLength = (str) => {
    let length = 0;
    // Общий i для двух циклов
    let i = str.length - 1;

    // Пропускаем пробелы с конца
    while (i >= 0 && str[i] === ' ') {
        i--;
    }

    // Считаем длину последнего слова
    while (i >= 0 && str[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};

export default getLastWordLength;
