import fs from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования функции
// const currentPath = getPath('/one.txt');

const getSum = (content) => {
    if (!content) {
        return 0;
    }
    return content.split(',')
        .map(num => parseInt(num.trim(), 10) || 0)
        .reduce((sum, num) => sum + num, 0);
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Синхронно читаем оба файла
    const content1 = fs.readFileSync(pathToFileOne, 'utf8');
    const content2 = fs.readFileSync(pathToFileTwo, 'utf8');

    // Вычисляем суммы для каждого файла
    const sum1 = getSum(content1);
    const sum2 = getSum(content2);

    // Общая сумма
    const totalSum = sum1 + sum2;

    // Синхронно записываем результат в файл
    fs.writeFileSync(pathToResultFile, totalSum.toString());
};

export default writeSumSync;
