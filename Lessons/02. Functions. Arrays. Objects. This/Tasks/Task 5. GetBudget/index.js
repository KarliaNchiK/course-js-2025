const getBudget = (people) => {
    return people.reduce((acc, person) => acc + person.budget, 0);
};

export default getBudget;
