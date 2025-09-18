const getBudget = (people) => {
    let familyBudget = 0;
    const budgetArr = people.map(obj => Number(obj.budget));
    familyBudget = budgetArr[0] + budgetArr[1] + budgetArr[2];
    return familyBudget;
};

export default getBudget;
