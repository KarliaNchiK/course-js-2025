const isThreePower = (num) => {
    while(num>1){
        num = num/3;
    }
    return num==1;
};

export default isThreePower;