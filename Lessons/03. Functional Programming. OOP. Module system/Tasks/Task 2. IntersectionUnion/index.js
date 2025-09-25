const getIntersectionUnion = (arrOne, arrTwo) => {
    const set1 = new Set(arrOne);
    const set2 = new Set(arrTwo);

    // Пересечение: значения, которые есть в обоих массивах
    const intersection = [...set1].filter(value => set2.has(value));

    // Объединение: все уникальные значения из обоих массивов
    const union = [...new Set([...arrOne, ...arrTwo])];

    return {
        intersection,
        union,
    };
};

export default getIntersectionUnion;
