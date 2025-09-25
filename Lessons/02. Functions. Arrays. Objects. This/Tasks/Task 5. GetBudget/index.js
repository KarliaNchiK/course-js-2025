const getBudget = (people) => {
    let result = 0;
    for (let i of people) {
        result += i.budget;
    }
    return result;
    // let temp = people.map((item) => { return item.budget });
    // let result = 0;
    // for (let i = 0; i < temp.length; i++) {
    //     result += temp[i];
    // }
    // return result;
};

export default getBudget;
