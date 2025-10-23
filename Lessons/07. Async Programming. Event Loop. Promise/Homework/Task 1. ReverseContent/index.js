import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const reverseContent = (filepath) =>
    // Начало
    // eslint-disable-next-line @stylistic/implicit-arrow-linebreak
    fs.readFile(filepath, 'utf8')
        .then(content => {
            const reversedContent = content.split('\n')
                .filter(line => line.trim() !== '')
                .reverse()
                .join('\n');
            return fs.writeFile(filepath, reversedContent);
        })
        .catch(error => {
            if (error.code === 'ENOENT') {
                throw new Error('Такого файла нет');
            }
            throw error;
        })

// Конец
// eslint-disable-next-line @stylistic/semi-style
;

export default reverseContent;