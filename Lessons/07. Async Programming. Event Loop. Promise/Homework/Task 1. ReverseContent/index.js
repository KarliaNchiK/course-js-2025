import { promises as fs } from 'fs';

const reverseContent = (filepath) => {

    // 1. читаем
    return fs.readFile(filepath, 'utf-8')
        .then((content) => {
            // 2. hазбиваем на строки переворачиваем и соединяем обратно
            const reversedContent = content
                .split('\n')
                .reverse()
                .join('\n');

            // 3. записываем обратно в файл
            return fs.writeFile(filepath, reversedContent);
        });
};

export default reverseContent;