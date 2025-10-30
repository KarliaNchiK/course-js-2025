import fs from 'fs';

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    const contentOne = fs.readFileSync(pathToFileOne, 'utf-8');

    const contentTwo = fs.readFileSync(pathToFileTwo, 'utf-8');

    const getSum = (content) => {
        return content
            .split(',')                  // разбиваем по запятым
            .map(s => s.trim())          // убираем лишние пробелы
            .map(Number)                 // превращаем строки в числа
            .reduce((acc, num) => acc + num, 0); // суммируем
    };

    const sum = getSum(contentOne) + getSum(contentTwo);

    fs.writeFileSync(pathToResultFile, String(sum));
};

export default writeSumSync;
