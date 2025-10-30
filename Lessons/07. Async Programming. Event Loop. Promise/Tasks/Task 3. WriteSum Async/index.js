import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => 0;

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const getSum = (content) => {
        return content.split(',')
            .map(num => parseInt(num.trim(), 10))
            .reduce((acc, num) => acc + num, 0);
    };

    let sum1 = 0;
    let sum2 = 0;

    return fs.readFile(pathToFileOne, 'utf-8')
    .then((dataOne) => sum1 = getSum(dataOne))
    .then(() => fs.readFile(pathToFileTwo, 'utf-8'))
    .then((dataTwo) => sum2 = getSum(dataTwo)).catch((error) => new Error("Такого файла нет")).then(() => sum1 + sum2);
};

export default writeSum;
