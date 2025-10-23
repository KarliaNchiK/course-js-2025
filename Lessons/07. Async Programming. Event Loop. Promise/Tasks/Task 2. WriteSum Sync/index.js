import fs from 'fs';

function sumFromFile(path) {
    const content = fs.readFileSync(path, 'utf-8');
    return content
        .split(',')
        .map(str => parseInt(str, 10))
        .filter(num => !Number.isNaN(num))
        .reduce((a, b) => a + b, 0);
}

function writeSumSync(path1, path2, resultPath) {
    const sum1 = sumFromFile(path1);
    const sum2 = sumFromFile(path2);
    const total = sum1 + sum2;
    fs.writeFileSync(resultPath, total.toString());
}

export default writeSumSync;
