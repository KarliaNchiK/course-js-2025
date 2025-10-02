const itisCool = (begin, end) => {
    for( let x = begin; x <= end; x ++){
        if(x % 3 === 0 && x % 5 === 0){
            console.log("ItisCool");
        }else if(x % 5 === 0) {
            console.log("Cool");

        }else if(x % 3 ===0){
            console.log("Itis");
        }else{
            console.log(x);
        }

    }





};

export default itisCool;
