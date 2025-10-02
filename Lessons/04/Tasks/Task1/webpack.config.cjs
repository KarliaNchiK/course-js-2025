const path = require('path');

module.exports = {
    mode: 'development', // или production для финальной сборки

    entry: './index.js', // основной JS-файл

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // директория, куда попадет сборка
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devtool: 'source-map', // удобно для отладки
};
