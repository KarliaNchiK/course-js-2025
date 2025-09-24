const getBudget = (people) => {
    let budgetArr = people.map(obj => Number(obj.budget));
    let sum = 0;
    budgetArr.forEach(num => {sum+=num;});
    return sum;
};

export default getBudget;
