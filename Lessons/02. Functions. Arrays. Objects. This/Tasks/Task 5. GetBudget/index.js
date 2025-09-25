const getBudget = (people) => {
    return people.reduce((acc, { budget }) => acc + budget, 0);
};

export default getBudget;
