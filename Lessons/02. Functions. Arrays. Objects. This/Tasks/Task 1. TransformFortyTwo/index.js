const CHECK_NUM = 42;

const transformFortyTwo = (arr) => {
    for(let i = 0;i < arr.length;i ++){
        let num = arr[i];
        if (arr[i]  % CHECK_NUM === 0){
            arr[i] = 'forty two!';

        }


    }
    return arr;



};

export default transformFortyTwo;
