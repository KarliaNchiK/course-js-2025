import { promises as fs } from 'fs';

const reverseContent = async (filepath) => {
    const content = await fs.readFile(filepath, 'utf-8');
    const reversed = content.split('\n').reverse().join('\n');
    await fs.writeFile(filepath, reversed);
};

export default reverseContent;