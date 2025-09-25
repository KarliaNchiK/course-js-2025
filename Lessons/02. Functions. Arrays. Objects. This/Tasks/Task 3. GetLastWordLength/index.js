const getLastWordLength = (str) => {
    const words = str.trim().split(' ');
    return words.at(-1).length;
};

export default getLastWordLength;
