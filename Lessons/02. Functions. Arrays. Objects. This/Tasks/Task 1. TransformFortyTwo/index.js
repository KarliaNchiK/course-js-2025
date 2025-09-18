const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    let newArr = arr.map(num => {
         if (num%42 === 0){
             return 'forty two!';
         }else{
             return num;
         }
    })
    return newArr;
};

export default transformFortyTwo;
