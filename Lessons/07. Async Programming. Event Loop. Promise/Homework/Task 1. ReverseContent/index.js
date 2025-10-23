import { readFileSync, writeFileSync } from 'fs';

const reverseContentSync = (filepath) => {
    const content = readFileSync(filepath, 'utf-8');
    const lines = content.split(/\r?\n/);
    if (lines[lines.length - 1] === '') {
        lines.pop();
    }
    const reversed = lines.reverse().join('\n');
    writeFileSync(filepath, reversed);
    return reversed;
};
export default reverseContentSync;