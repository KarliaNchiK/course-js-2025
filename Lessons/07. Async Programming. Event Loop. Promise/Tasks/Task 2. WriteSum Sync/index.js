import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => 0;

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const getSum = (content) => 
        content.split(',')
            .map(num => parseInt(num.trim(), 10))
            .reduce((acc, num) => acc + num, 0);
    
    const sum1 = getSum(fs.readFileSync(pathToFileOne, 'utf-8'));
    const sum2 = getSum(fs.readFileSync(pathToFileTwo, 'utf-8'));
    
    fs.writeFileSync(pathToResultFile, (sum1 + sum2).toString());
};

export default writeSumSync;
