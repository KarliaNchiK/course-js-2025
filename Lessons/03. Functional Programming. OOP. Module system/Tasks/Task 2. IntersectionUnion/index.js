const getIntersectionUnion = (mas1, mas2) => {
    let obj = {
        intersection: undefined,
        union: undefined
    }

    // Преобразуем Set обратно в массив
    obj.union = [...new Set([...mas1, ...mas2])];

    obj.intersection = mas1.filter(element => mas2.includes(element));

    return obj;
};

export default getIntersectionUnion;
