const isTicketHappy = (numStr) => {
    let suma1 = 0;
    let suma2 = 0;
    let index2 = (numStr.length / 2);
    for (let i = 0; i < numStr.length / 2; i ++){
        suma1 += Number(numStr[i]);
        suma2 += Number(numStr[index2 + i]);  //23433424

    } 

    return suma1 === suma2;
};

export default isTicketHappy;
