const getLastWordLength = (str) => {
    const trimmedStr = str.trim();

    if (trimmedStr.lenght === 0) return 0;

    const words = trimmedStr.split(" ");
    const lastWord = words[words.length-1];
    return lastWord.length;
};

export default getLastWordLength;
