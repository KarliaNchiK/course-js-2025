const isTicketHappy = (numStr) => {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < numStr.length/2; i++){
        sum1 += parseInt(numStr[i]);
        sum2 += parseInt(numStr[numStr.length - 1 - i]);
    }
    if (sum1 === sum2 ){
        return true;
    }
    return false;
};

export default isTicketHappy;
