import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);

const getSum = (content) => {
    return content.split(',')
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num))
        .reduce((sum, num) => sum + num, 0);
};

const writeSum = (file1, file2) => { // Изменено: принимаем только 2 файла
    const files = [file1, file2];
    
    return Promise.all(files.map(file => 
        fs.readFile(file, 'utf8')
    ))
    .then(contents => {
        const totalSum = contents.reduce((sum, content) => sum + getSum(content), 0);
        return totalSum;
    })
    .catch(error => {
        throw new Error('Такого файла нет');
    });
};

export default writeSum;