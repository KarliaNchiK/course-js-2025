import { error } from 'console';
import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => content.split(', ').map(x => Number(x)).reduce((acc, x) => acc + x, 0);

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    return Promise.all([
        fs.readFile(pathToFileOne, 'utf-8'),
        fs.readFile(pathToFileTwo, 'utf-8')
    ])
        .then(([value1, value2]) => {
            return getSum(value1) + getSum(value2);
        })
        .catch(error => {
            throw new Error('Такого файла нет');
        });
};

export default writeSum;
