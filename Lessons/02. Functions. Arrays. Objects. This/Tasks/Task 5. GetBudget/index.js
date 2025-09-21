const getBudget = (people) => {


    // const budgetMap = people.map((user) => user.budget);
    //
    // let budget = 0;
    // for (let i = 0; i < budgetMap.length; i++) {
    //     budget += budgetMap[i];
    // }
    // return budget;
    return people.reduce((total, { budget }) => {
        return total + budget}, 0);

};


const family = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
];
console.log(getBudget(family));  // 65700
export default getBudget;
