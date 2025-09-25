const getBudget = (people) => {
    return people.map(user => user.budget).reduce((a, b) => a + b);

};

export default getBudget;
