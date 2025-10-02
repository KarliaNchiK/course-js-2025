// степень округления числа
import {parseDateString} from "jsdom/lib/jsdom/living/helpers/dates-and-times.js";

const ROUNDING_DEGREE = 100;

const roundAndRootNumber = (num) => {
    let sqrtNum = Math.sqrt(num);
    if(num >= 0){
       let result = String(Math.floor(sqrtNum * 100) / 100);
        return result

    }else{
        return 'error';

    }


};

export default roundAndRootNumber;
