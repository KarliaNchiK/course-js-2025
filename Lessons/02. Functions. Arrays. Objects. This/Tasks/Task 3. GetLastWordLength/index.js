const getLastWordLength = (str) => {
    let lastWord = str.trim().split(" ").at(-1);
    return lastWord.length;
};
export default getLastWordLength;
