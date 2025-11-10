import fs from 'fs';
import path from 'path';

const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

const getSum = (content) => {
    const numbers = content
        .split(',')
        .map(num => parseInt(num.trim()))
        .filter(num => !isNaN(num));
    
    return numbers.reduce((sum, num) => sum + num, 0);
};

const writeSumSync = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    try {
        // Синхронное чтение первого файла
        const data1 = fs.readFileSync(pathToFileOne, 'utf-8');
        const sum1 = getSum(data1);
        console.log(`First file sum: ${sum1}`);
        
        // Синхронное чтение второго файла
        const data2 = fs.readFileSync(pathToFileTwo, 'utf-8');
        const sum2 = getSum(data2);
        console.log(`Second file sum: ${sum2}`);
        
        // Вычисление общей суммы
        const totalSum = sum1 + sum2;
        
        // Синхронная запись результата
        fs.writeFileSync(pathToResultFile, totalSum.toString());
        console.log(`Result: ${totalSum}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // В случае ошибки записываем 0 или можно выбросить исключение
        fs.writeFileSync(pathToResultFile, '0');
    }
};

export default writeSumSync;