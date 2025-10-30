import { promises as fs } from 'fs';
import path from 'path';


// Метод для отладки. В итоговом решении использоваться не должен
const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// Пример использования метода
// const currentPath = getPath('/one.txt');


const reverseContent = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then(content => content.split('\n').reverse().join('\n'))
        .then(reversedContent => 
            fs.truncate(filepath)
                .then(() => fs.writeFile(filepath, reversedContent))
        );
};

export default reverseContent;