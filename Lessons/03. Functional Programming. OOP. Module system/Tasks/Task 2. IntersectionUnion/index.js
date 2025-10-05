import {filter} from "jsdom/lib/jsdom/living/traversal/helpers.js";

const getIntersectionUnion = (arrOne, arrTwo) => {
    const set = new Set(arrOne);
    const set2 = new Set(arrTwo);
   // const  set3 = new Set();

    const intersection = [...set].filter(x => set2.has(x)); // для каждого элемента в set пров есть ли в set2(has)
    const union = [...new Set([...arrOne, ...arrTwo])];
    return {intersection , union};




};

export default getIntersectionUnion;
