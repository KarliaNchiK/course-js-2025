import { promises as fs } from 'fs';
import path from 'path';

// вспомогательная функция для теста
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

const getSum = (content) => {
    const numbers = content.split(', ').map(Number);
    return numbers.reduce((acc, cur) => acc + cur, 0);
};

const writeSum = (pathToFileOne, pathToFileTwo) => {
    let total = 0;

    return fs
        .readFile(pathToFileOne, 'utf-8')
        .then((data1) => {
            total += getSum(data1);
            return fs.readFile(pathToFileTwo, 'utf-8');
        })
        .then((data2) => {
            total += getSum(data2);
            return total;
        })
        .catch((error) => {
            throw new Error('Такого файла нет');
        });
};

export default writeSum;
