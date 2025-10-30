import { promises as fs } from 'fs';
import path from 'path';



// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    return content.split(", ")
        .map(Number)
        .reduce((sum, num) => sum + num);
}

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const firstPromise = fs.readFile(pathToFileOne, 'utf-8')
        .then(data => getSum(data));

    const secondPromise = fs.readFile(pathToFileTwo, 'utf-8')
        .then(data => getSum(data));

    return Promise.all([firstPromise, secondPromise])
        .then(([sum1, sum2]) => {
            return sum1 + sum2
        })
        .catch((error) => {
            throw new Error("Такого файла нет");
        })

};

export default writeSum;