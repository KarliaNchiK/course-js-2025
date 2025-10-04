const getLastWordLength = (str) => {
        const trimy = str.trim();
        let length = 0;
    for(let i = trimy.length - 1; i >= 0; i --){
        if(trimy[i] === ' '){
            break;



        }
        length ++;


    }
    return length;










};

export default getLastWordLength;
