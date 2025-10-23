import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    let result = 0;
    let string = '';
    for (let i = 0; i <= content.length; i += 1) {
        if (content.at(i) === ' ' || content.at(i) === ',' || i === content.length) {
            result += Number(string);
            string = '';
        } else {
            string += content.at(i);
        }
    }
    return result;
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const StringFileOne = fs.readFileSync(pathToFileOne, {encoding: 'utf-8'});
    const StringFileTwo = fs.readFileSync(pathToFileTwo, {encoding: 'utf-8'});
    const sumFileOne = getSum(StringFileOne);
    const sumFileTwo = getSum(StringFileTwo);

    const result = (sumFileOne + sumFileTwo).toString();
    fs.writeFileSync(pathToResultFile, result);
};

export default writeSumSync;
