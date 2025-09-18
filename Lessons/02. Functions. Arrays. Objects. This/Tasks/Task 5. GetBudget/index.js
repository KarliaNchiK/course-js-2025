const getBudget = (people) => {
    let budget = 0;
    people.forEach(element => {
        budget += element.budget;
    });
    return budget;
};

export default getBudget;
