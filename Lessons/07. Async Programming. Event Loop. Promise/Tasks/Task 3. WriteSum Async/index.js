import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    if (!content) {
        return 0;
    }
    return content.split(',')
        .map(num => parseInt(num.trim(), 10))
        .reduce((sum, num) => sum + num, 0);
};

const writeSum = (pathToFileOne, pathToFileTwo) => Promise.all([
    fs.readFile(pathToFileOne, 'utf8'),
    fs.readFile(pathToFileTwo, 'utf8'),
]).then(([content1, content2]) => getSum(content1) + getSum(content2)).catch((error) => {
    if (error.code === 'ENOENT') {
        throw new Error('Такого файла нет');
    }
    throw error;
});

export default writeSum;
