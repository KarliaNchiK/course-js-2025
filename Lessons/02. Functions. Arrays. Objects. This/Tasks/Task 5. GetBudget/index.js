const getBudget = (people) => 
    {
        return people.reduce((acc, human) => acc + human.budget, 0);
    };

export default getBudget;
