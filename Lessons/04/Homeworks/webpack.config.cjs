const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'dist')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {},
};