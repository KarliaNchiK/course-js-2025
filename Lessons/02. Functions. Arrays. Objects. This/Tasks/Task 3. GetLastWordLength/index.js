const getLastWordLength = (str) => {

    let string = str.trim();
    const lastWord = string.split(" ").pop();

    return lastWord.length;
};

console.log(getLastWordLength('hey, I just met you'));
export default getLastWordLength;
