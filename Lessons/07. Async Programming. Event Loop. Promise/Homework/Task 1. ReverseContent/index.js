import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    // Начало
    return fs.readFile(filepath, 'utf-8')
        .then((content) => {
            const lines = content.split('\n').filter(line => line !== '');
            const reversedLines = lines.reverse();
            return reversedLines.join('\n');
        })
        .then((reversedContent) => {
            return fs.writeFile(filepath, reversedContent);
        });
    // Конец
};

export default reverseContent;