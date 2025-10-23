import fs from 'fs';
import path from 'path';

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

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const firstFileContent = fs.readFileSync(pathToFileOne, 'utf-8');
    const secondFileContent = fs.readFileSync(pathToFileTwo, 'utf-8');
    fs.writeFileSync(pathToResultFile, String(getSum(firstFileContent) + getSum(secondFileContent)));
};

export default writeSumSync;
