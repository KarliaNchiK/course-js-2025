// Возвращает копию элемента
const getCopy = (el) => JSON.parse(JSON.stringify(el));

// Возвращает массив без дубликатов
const onlyUnique = (array) => [ ...new Set(array) ];

const generateDifference = (objOne, objTwo) => {

    const obj = { ...objOne, ...objTwo };

    for (let key in obj) {
        if (key in objOne) {
            if (key in objTwo) {

                if (objOne[key] === objTwo[key]) {
                    obj[key] = "unchanged";
                } else {
                    obj[key] = "changed";
                }

            } else {
                obj[key] = "deleted";
            }
        } else {
            obj[key] = "added"
        }
    }
    return obj;
};

console.log(generateDifference(
    { name: 'Ilon', surname: 'Mask', age: 50 },
    { name: 'Ilon-genius', surname: 'Mask', children: [] },
));

export default generateDifference;
