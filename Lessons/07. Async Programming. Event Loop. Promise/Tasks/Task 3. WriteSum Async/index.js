import { promises as fs } from 'fs';

const writeSum = async (pathToFileOne, pathToFileTwo) => {
    const getSum = (content) => {
        return content
            .split(',')
            .map((s) => s.trim())
            .map(Number)
            .reduce((a, b) => a + b, 0);
    };

    try {
        const [contentOne, contentTwo] = await Promise.all([
            fs.readFile(pathToFileOne, 'utf-8'),
            fs.readFile(pathToFileTwo, 'utf-8'),
        ]);

        return getSum(contentOne) + getSum(contentTwo);
    } catch {
        throw new Error('Такого файла нет');
    }
};

export default writeSum;
