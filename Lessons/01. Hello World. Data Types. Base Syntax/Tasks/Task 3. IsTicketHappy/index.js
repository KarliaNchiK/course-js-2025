const isTicketHappy = (numStr) => {
    const length = numStr.length;
    const half = length / 2;

    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for (let i = 0; i < half; i++) {
        firstHalfSum += parseInt(numStr[i]);
    }

    for (let i = half; i < length; i++) {
        secondHalfSum += parseInt(numStr[i]);
    }

    return firstHalfSum === secondHalfSum;
};

export default isTicketHappy;
