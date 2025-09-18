const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let bin = convertToBinary(num);
    let counter = 0;
    for(let i=0;i<=bin.length;i++){
        if(bin.at(i)==='1'){
            counter+=1;
        }
    }
    return counter;
};

export default getHammingWeight;
