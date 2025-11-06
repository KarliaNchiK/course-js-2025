import {promises, promises as fs} from 'fs';
import path from 'path';
import {Exception} from "sass-embedded";

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    content = content.split(', ');
    content = content.map(elem => Number(elem));
    const sum = content.reduce((total, current) => total + current, 0);
    return sum;
};

const writeSum = (pathToFileOne, pathToFileTwo) => {
    const readFile = (filePath) => {
        return fs.readFile(filePath, 'utf8')
            .then(data => getSum(data))
            .catch(error => {
                throw new Error('Такого файла нет');
            });
    };
    return Promise.all([readFile(pathToFileOne), readFile(pathToFileTwo)])
        .then(sums => sums.reduce((total, current) => total + current, 0));
};

export default writeSum;
