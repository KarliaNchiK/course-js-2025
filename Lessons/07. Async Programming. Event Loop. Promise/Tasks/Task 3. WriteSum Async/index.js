import { promises as fs } from 'fs';
import path from 'path';

const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const getSum = (content) => {
        return content.split(',')
            .map(num => parseInt(num.trim(), 10))
            .reduce((acc, num) => acc + num, 0);
    };

    return Promise.all([
        fs.readFile(pathToFileOne, 'utf-8').then(content => getSum(content)),
        fs.readFile(pathToFileTwo, 'utf-8').then(content => getSum(content))
    ])
    .then(([sum1, sum2]) => {
        const total = sum1 + sum2;
        return fs.writeFile(pathToResultFile, total.toString());
    })
    .catch((e) => {
        throw new Error("Такого файла нет");
    });
};

export default writeSum;