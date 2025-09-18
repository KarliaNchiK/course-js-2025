const changeCase = (str) => 
    {
        let result = '';
        for (let i = 0; i < str.length; i++)
        {            
            if (str[i] === str[i].toUpperCase() && str[i] != str[i].toLowerCase())
                result += str[i].toLowerCase();
            else if (str[i] != str[i].toUpperCase() && str[i] === str[i].toLowerCase())
                result += str[i].toUpperCase();
            else
                result += str[i];
        }
        return result;
    };

export default changeCase;
