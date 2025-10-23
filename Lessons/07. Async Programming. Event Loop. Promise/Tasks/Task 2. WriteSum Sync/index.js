import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => content.split(', ').map(x => Number(x)).reduce((acc, x) => acc + x, 0);

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    let result = getSum(fs.readFileSync(pathToFileOne, 'utf-8')) +
        getSum(fs.readFileSync(pathToFileTwo, 'utf-8'));

    fs.writeFileSync(pathToResultFile, String(result));
};

export default writeSumSync;
