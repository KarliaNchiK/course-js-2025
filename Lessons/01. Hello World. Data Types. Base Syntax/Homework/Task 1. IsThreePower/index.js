const isThreePower = (num) => {
    for(let i = 0; 3**i <= num; i++){
        if(3**i===num){
            return true;
        }
    }
    return false;
};

export default isThreePower;