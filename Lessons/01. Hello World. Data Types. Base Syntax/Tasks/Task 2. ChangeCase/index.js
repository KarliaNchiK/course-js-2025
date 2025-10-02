const changeCase = (str) => {
    let result = '';
    for(let i = 0;i < str.length; i++){
        let letter = str[i];
        if(letter === letter.toUpperCase()){
            letter = letter.toLowerCase();
            result += letter;
        }else{
            letter = letter.toUpperCase();
            result += letter.toUpperCase();

        }



    }
    return result

};

export default changeCase;
