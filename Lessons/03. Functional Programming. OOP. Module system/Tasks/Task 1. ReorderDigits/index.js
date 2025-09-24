const reorderDigits = (type, ...numbers) => {
    if (numbers === undefined){
        return [];
    }
    if(type == "asc"){
        return numbers.sort((a,b) => a-b);
    }else if (type == "desc"){
        return numbers.sort((a,b) => b-a);
    }else{
        return [];
    }
};

export default reorderDigits;
