const getBudget = (people) => {
    const arrBudget = people.map(people => people.budget);
    let result = 0;
    for(let i = 0;i < arrBudget.length; i++){
         result += arrBudget[i];
    }
    return result;



};

export default getBudget;
