import { promises as fs } from 'fs';

const getSum = (content) => {
    // 1. разбиваем строку по запятым убираем пробелы преобразуем в числа и +
    return content
        .split(',')
        .map((str) => str.trim())
        .map((str) => Number(str))
        .reduce((sum, num) => sum + num, 0);
};

// асинхронное чтение файлов
const writeSum = (pathToFileOne, pathToFileTwo) => {
    // 2. возвращаем промис
    return Promise.all([
        fs.readFile(pathToFileOne, 'utf-8'),
        fs.readFile(pathToFileTwo, 'utf-8'),
    ])
        // распаковываем сразу массив который получился как только закончили
        .then(([contentOne, contentTwo]) => {
            // суммируем содержимое
            const sumOne = getSum(contentOne);
            const sumTwo = getSum(contentTwo);
            return sumOne + sumTwo;
        })
        .catch(() => {
            // 3. выбрасываем ошибкн
            throw new Error('Такого файла нет');
        });
};

export default writeSum;
