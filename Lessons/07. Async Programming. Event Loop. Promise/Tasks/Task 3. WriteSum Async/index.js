import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    return content.split(',')
        .map(num => parseInt(num.trim(),10))
        .reduce((sum,num) => sum + num, 0)
};

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {

    return Promise.all([
            fs.readFile(pathToFileOne, 'utf-8'),
            fs.readFile(pathToFileTwo, 'utf-8')
        ])
        .then(([content1, content2])=>{
            const sum1 = getSum(content1);
            const sum2 = getSum(content2);

            const result = sum1 + sum2;
            return result;
        })
            .catch(error => {

                throw new Error('Такого файла нет');
    });
};

export default writeSum;
