const getBudget = (people) => {
    return people.reduce((acc, human) => {
        let sum = acc + human.budget;
        return sum;
    }, 0)
};

export default getBudget;
