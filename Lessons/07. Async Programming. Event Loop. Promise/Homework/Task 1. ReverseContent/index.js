import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then(content => {
            const lines = content.split('\n');
            const reversedLines = lines.reverse();
            const result = reversedLines.join('\n');
            return fs.writeFile(filepath, result);
        });
};

export default reverseContent;