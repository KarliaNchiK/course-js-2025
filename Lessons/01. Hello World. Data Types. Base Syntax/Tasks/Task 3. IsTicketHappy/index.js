const isTicketHappy = (numStr) => {
    if (numStr.length % 2 === 0) {
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i <= numStr.length - 1; i += 1) {
            if (i <= (numStr.length / 2) - 1) {
                sum1 += Number(numStr[i]);
            } else {
                sum2 += Number(numStr[i]);
            }
        }
        if (sum1 === sum2) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
};

export default isTicketHappy;
