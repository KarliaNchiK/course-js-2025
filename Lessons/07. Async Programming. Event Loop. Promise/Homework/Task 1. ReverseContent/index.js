import { promises as fs } from 'fs';
import path from 'path';

// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');

const dataToReverseData = (data) => {
    const arr = data.split('\n');
    arr.reverse();
    const result = arr.join('\n');
    return result;
};
const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf8')
        .then((data) => {
            const reverseData = dataToReverseData(data);
            return fs.writeFile(filepath, reverseData, 'utf-8')
                .then(() => reverseData);
        });
};
export default reverseContent;