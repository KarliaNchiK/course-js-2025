const getLastWordLength = (str) => {
    let line = str.trim();
    if (line.length===0){
        return 0;
    }
    let lastSpaceIndex = 0;
    for(let i= 0; i<= line.length; i++){
        if (line.at(i) === ' '){
            lastSpaceIndex = i;
        }
    }
    if (lastSpaceIndex===0){
        return line.length;
    } else {
        return line.length-lastSpaceIndex-1;
    }
};


export default getLastWordLength;
