const getBudget = (people) => {
    // reduce для агрегации бюджета
    return people.reduce((totalBudget, person) => {
        return totalBudget + person.budget;
    }, 0);
};

export default getBudget;