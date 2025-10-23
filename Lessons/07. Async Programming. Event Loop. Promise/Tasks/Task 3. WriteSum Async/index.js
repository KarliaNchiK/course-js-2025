import fs from 'fs';

function getSum(content) {
    return content
        .split(',')
        .map(str => parseInt(str, 10))
        .filter(num => !Number.isNaN(num))
        .reduce((a, b) => a + b, 0);
}

function writeSum(path1, path2) {
    return new Promise((resolve, reject) => {
        fs.readFile(path1, 'utf-8', (err1, content1) => {
            if (err1) {
                reject(new Error('Такого файла нет'));
                return;
            }
            fs.readFile(path2, 'utf-8', (err2, content2) => {
                if (err2) {
                    reject(new Error('Такого файла нет'));
                    return;
                }
                const sum = getSum(content1) + getSum(content2);
                resolve(sum);
            });
        });
    });
}
export default writeSum;
