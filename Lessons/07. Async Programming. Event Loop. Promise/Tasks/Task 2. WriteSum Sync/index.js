import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    const numbers = content.split(',').map(num => parseInt(num.trim(), 10));
    return numbers.reduce((acc, num) => acc + num, 0);
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const content1 = fs.readFileSync(pathToFileOne, 'utf-8');
    const content2 = fs.readFileSync(pathToFileTwo, 'utf-8');
    const sum1 = getSum(content1);
    const sum2 = getSum(content2);
    const totalSum = sum1 + sum2;
    fs.writeFileSync(pathToResultFile, String(totalSum));
};

export default writeSumSync;
