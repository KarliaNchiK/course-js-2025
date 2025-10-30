import fs from 'fs';
import path from 'path';

let state = 0;

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    let numbers = content.split(', ').map(n => Number(n));
    return numbers.reduce((sum, num) => sum + num, 0);
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const firstFileContent = fs.readFileSync(pathToFileOne, 'utf8');
    const secondFileContent = fs.readFileSync(pathToFileTwo, 'utf8');

    let firstSum = getSum(firstFileContent);
    let secondSum = getSum(secondFileContent);
    fs.writeFileSync(pathToResultFile, (firstSum + secondSum).toString(), 'utf8');
};

export default writeSumSync;
