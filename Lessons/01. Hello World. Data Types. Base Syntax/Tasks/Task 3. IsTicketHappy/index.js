const isTicketHappy = (numStr) => {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < (numStr.length / 2); i++) {
        sumLeft += +numStr[i];
    }
    for (let i = (numStr.length / 2); i < numStr.length; i++) {
        sumRight += +numStr[i];
    }
    if (sumRight === sumLeft) {
        return true;
    } else {
        return false;
    }
};

export default isTicketHappy;
