const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let cnt = 0;
    while(num > 0){
        if(num % 2 == 1){
            cnt++;
        }
        num = Math.floor(num/2)
    }
    return cnt;
};

export default getHammingWeight;
