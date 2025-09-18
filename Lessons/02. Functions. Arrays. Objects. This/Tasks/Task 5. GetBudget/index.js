function getBudget(family) {
    return family.reduce((total, member) => total + member.budget, 0);
}

// function getBudget(family) {
//     let total = 0;
//     for (let i = 0; i < family.length; i++) {
//         total += family[i].budget;
//     }
//     return total;
// }
export default getBudget;
