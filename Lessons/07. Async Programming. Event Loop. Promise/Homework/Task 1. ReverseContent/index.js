import { error } from 'console';
import { promises as fs, writeFile } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then((content) => {
            return fs.writeFile(filepath, content.split('\n').reverse().join('\n'));
        })
        .catch(error => { throw new Error('что-то не так') });
};

export default reverseContent;