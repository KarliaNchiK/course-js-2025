const isTicketHappy = (numStr) => {
    const length = numStr.length;
    const halfLen = length / 2;
    
    let firstfSum = 0;
    let secfSum = 0;
    
    // Суммируем цифры первой половины
    for (let i = 0; i < halfLen; i++) {
        firstfSum += parseInt(numStr[i], 10);
    }
    
    // Суммируем цифры второй половины
    for (let i = halfLen; i < length; i++) {
        secfSum += parseInt(numStr[i], 10);
    }
    
    return firstfSum === secfSum;
};

export default isTicketHappy;
