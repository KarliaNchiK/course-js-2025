const changeCase = (str) => {
    let newstr = "";
    
    for (let i = 0; i < str.length; i++){
        let s = str[i];
        if (s === s.toLowerCase()){
            newstr += s.toUpperCase();
        }else{
            newstr += s.toLowerCase();
        }
    }

    return newstr;
};

export default changeCase;
