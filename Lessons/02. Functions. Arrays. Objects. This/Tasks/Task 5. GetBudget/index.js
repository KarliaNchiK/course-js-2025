const getBudget = (people) => {
    let result = 0;
    for (let i = 0; i < people.length; i++) {
        result += people[i].budget;
    }
    return result;
};

export default getBudget;
