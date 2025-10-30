import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf8')
        .then((fileContent) => {
            return fileContent.split('\n').map(line => line);
        })
        .then((fileRowsArray) => {
            const arrayLength = fileRowsArray.length;
            let reversedArray = new Array(arrayLength);
            for (let i = 0; i < arrayLength; i += 1) {
                reversedArray[i] = fileRowsArray[arrayLength - i - 1];
            }
            return reversedArray;
        })
        .then((reversedArray) => {
            const fileNewContent = reversedArray.join('\n');
            return fs.writeFile(filepath, fileNewContent)
                .then(() => fileNewContent);
        })
        .catch((error) => {
            throw new Error(`Ошибка: ${error}`);
        });
};

export default reverseContent;
