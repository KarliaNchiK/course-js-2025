import fs from 'fs';

const getSum = (content) => {
    // 1. разбиваем строку по запятым убираем пробелы преобразуем в числа и +
    return content
        .split(',')
        .map((str) => str.trim())
        .map((str) => Number(str))
        .reduce((sum, num) => sum + num, 0);
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // 2. cинхронно читаем 1
    const contentOne = fs.readFileSync(pathToFileOne, 'utf-8');
    const sumOne = getSum(contentOne);

    // 3. синхронно читаем 2
    const contentTwo = fs.readFileSync(pathToFileTwo, 'utf-8');
    const sumTwo = getSum(contentTwo);

    // 4. cчитаем общую сумму
    const totalSum = sumOne + sumTwo;

    // 5. cинхронно записываем результат в 3
    fs.writeFileSync(pathToResultFile, String(totalSum));
};

export default writeSumSync;
