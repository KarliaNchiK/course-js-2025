const path = require('path');

module.exports = {
    mode: 'development',
    
    entry: {
        'core': './src/js/index.js'
    },
    
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].bundle.js',
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
        ]
    },
    
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/js/')
        }
    }
};
