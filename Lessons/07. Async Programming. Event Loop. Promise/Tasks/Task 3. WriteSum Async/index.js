// import { promises as fs } from 'fs';
// import path from 'path';
//
// // Метод для отладки. В итоговом решении использоваться не должен
// const getPath = (fileName) => path.join(__dirname, './__fixtures__', fileName);
// // Пример использования функции
// // const currentPath = getPath('/one.txt');
//
// const getSum = (content) => {
//     let result = 0;
//     let string = '';
//     for (let i = 0; i <= content.length; i += 1) {
//         if (content.at(i) === '' || content.at(i) === ',' || i === content.length) {
//             result += Number(string);
//             string = '';
//         } else {
//             string += content.at(i);
//         }
//     }
//     return result;
// };
//
// const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => new Promise((resolve, reject) => {
//     try {
//         let sum = 0;
//         const stringFileOne = fs.readFile(pathToFileOne, 'utf-8');
//         const sumOne = getSum(stringFileOne);
//         sum += sumOne;
//
//         const stringFileTwo = fs.readFile(pathToFileTwo, 'utf-8');
//         const sumTwo = getSum(stringFileTwo);
//         sum += sumTwo;
//
//         resolve(sum);
//     } catch (error) {
//         reject(error);
//     }
// });
// export default writeSum;

import { promises as fs } from 'fs';

const getSum = (content) => {
    let result = 0;
    let string = '';
    for (let i = 0; i <= content.length; i += 1) {
        if (content[i] === '\n' || content[i] === ',' || i === content.length) {
            result += Number(string) || 0;
            string = '';
        } else {
            string += content[i];
        }
    }
    return result;
};

const writeSum = (pathToFileOne, pathToFileTwo, pathToResultFile) => {
    // Читаем оба файла параллельно
    return Promise.all([
        fs.readFile(pathToFileOne, 'utf-8'),
        fs.readFile(pathToFileTwo, 'utf-8'),
    ])
        .then(([stringFileOne, stringFileTwo]) => {
            const sum1 = getSum(stringFileOne);
            const sum2 = getSum(stringFileTwo);
            return sum1 + sum2;
        })
        .catch(() => {
            throw new Error('Такого файла нет');
        });
};

export default writeSum;