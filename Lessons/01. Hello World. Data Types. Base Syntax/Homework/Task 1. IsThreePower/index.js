const isThreePower = (num) => {
    if(num <= 0) return false;
    if(num === 1) return true;

    while(num % 3 === 0){
        num = num / 3;
        if(num === 1){
            return true;
        }
    }
    return false;



};

export default isThreePower;