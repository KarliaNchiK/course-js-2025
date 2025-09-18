const getLastWordLength = (str) => 
    {
        let words = str.split(' ')
                       .filter(el => el !== '');

        if (words.length === 0)
            return 0;

        return words.at(-1).length;
    };
export default getLastWordLength;
