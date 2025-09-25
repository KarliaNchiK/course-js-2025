const getLastWordLength = (str) => {
    return str.trim().split(' ').pop().length;
};

export default getLastWordLength;
