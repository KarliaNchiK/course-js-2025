const convertToBinary = num => (num >>> 0).toString(2);
function arf(a){
    let str = "";
    while (a > 0){
        str = a % 2 + str;
        a = Math.floor(a / 2);
    }

    return str
}
const getHammingWeight = (num) => {
    let suma = 0;
    let str = arf(num);
    for (let i = 0; i < str.length; i++){
        if(str[i] === '1'){
            suma += 1;
        }
    }
    return suma;

};

export default getHammingWeight;
