const isTicketHappy = (numStr) => {
    const length = numStr.length;
    const half = length / 2;
    
    let firstHalfSum = 0;
    let secondHalfSum = 0;
    
    for (let i = 0; i < length; i++) {
        const digit = parseInt(numStr[i], 10);
        if (i < half) {
            firstHalfSum += digit;
        } else {
            secondHalfSum += digit;
        }
    }
    
    return firstHalfSum === secondHalfSum;
};

export default isTicketHappy;
