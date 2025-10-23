import { promises as fs } from 'fs';
import path from 'path';
// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');
const reverse = (line) => {
    const lines = line.split('\n');
    const reversedLines = lines.reverse();
    return reversedLines.join('\n');
};

const reverseContent = (filepath) => {
    // Начало
    return fs.readFile(filepath, 'utf-8')
        .then(content => {
            const reversed = reverse(content);
            return fs.writeFile(filepath, reversed, 'utf-8')
                .then(() => reversed);
        })
        .catch(error => {
            throw new Error(`Cannot process file ${filepath}: ${error.message}`);
        });
    // Конец
};
export default reverseContent;