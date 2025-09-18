const isBoomerang = (arr) =>
    arr.length === 3 && arr[0] === arr[2] && arr[1] !== arr[0];

const getBoomerangsCount = (numbers) => {
    let counter = 0;
    let triple = [];
    for (let i = 0; i < numbers.length - 2; i++) {
        triple = numbers.slice(i, i + 3);
        if (isBoomerang(triple)) {
            counter++;
        }
    }
    return counter;
};

export default getBoomerangsCount;
