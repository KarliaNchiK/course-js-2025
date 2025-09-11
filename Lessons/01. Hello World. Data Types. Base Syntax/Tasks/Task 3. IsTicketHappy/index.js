const isTicketHappy = (numStr) => {
    let length = numStr.length;
    let temp = 0;
    for(let i=0;i<length/2;i++){
        temp+=Number(numStr.at(i))-Number(numStr.at(length-i-1));
    }
    if (temp === 0){
        return true;
    }else{
        return false;
    }
}

export default isTicketHappy;
