const convertToBinary = num => (num >>> 0).toString(2);

const getHammingWeight = (num) => {
    let lengthBin = 0;
    const res = convertToBinary(num);
    for(let i = 0; i < res.length;i ++){
        if(res[i] === '1'){
            lengthBin ++;
        }

    }
    return lengthBin;




};


export default getHammingWeight;
