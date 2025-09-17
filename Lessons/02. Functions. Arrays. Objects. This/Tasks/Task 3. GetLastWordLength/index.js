const getLastWordLength = (str) => {
    return str.trim().split(' ').at(-1).length;
};

export default getLastWordLength;
