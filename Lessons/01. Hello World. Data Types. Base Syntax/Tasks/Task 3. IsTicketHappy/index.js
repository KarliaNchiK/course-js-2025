const isTicketHappy = (numStr) => {
    let pars1 = 0;
    let pars2 = 0;
    //const cut = numStr.length / 2;

    for(let i = 0;i < numStr.length/2; i++){
        let cut = numStr[i];
        pars1 += parseInt(cut);
    }
    for(let i = numStr.length/2; i < numStr.length;i ++){
        let cut = numStr[i];
        pars2 += parseInt(cut);
    }
    return pars1 === pars2;



};

export default isTicketHappy;
