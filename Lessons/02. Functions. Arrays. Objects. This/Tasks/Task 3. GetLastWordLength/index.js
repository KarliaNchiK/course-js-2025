const getLastWordLength = (str) => {
    let list = str.trimEnd(' ').split(' ');
    return (list[list.length-1]).length;
};

export default getLastWordLength;
