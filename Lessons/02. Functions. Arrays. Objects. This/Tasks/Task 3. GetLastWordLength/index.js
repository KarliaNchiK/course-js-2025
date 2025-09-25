const getLastWordLength = (s) => {
    let lastind = s.length - 1;
    while (s[lastind] === ' '){
        lastind -= 1;
    }
    let lent = 0;
    for (let i = 0; i <= lastind; i++){
        let str = s[lastind - i];
        if (str !== ' '){
            lent += 1;
        }else {
            break;
        }
    }
    return lent;


};

export default getLastWordLength;
