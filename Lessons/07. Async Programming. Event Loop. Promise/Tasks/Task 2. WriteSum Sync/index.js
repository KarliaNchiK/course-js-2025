import fs from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    return content.split(", ")
        .map(Number)
        .reduce((sum, num) => sum + num)
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const firstFileContent = fs.readFileSync(pathToFileOne, 'utf-8');
    const secondFileContent = fs.readFileSync(pathToFileTwo, 'utf-8');

    const result = getSum(firstFileContent) + getSum(secondFileContent);

    fs.writeFileSync(pathToResultFile, result.toString());


};

export default writeSumSync;
