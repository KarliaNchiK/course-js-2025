const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,        // Обрабатываем CSS файлы
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: './dist',      // Папка для статических файлов
        port: 3000,            // Порт
        open: true             // Автооткрытие браузера
    },
};