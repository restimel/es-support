const path = require('path');

module.exports = {
    entry: './src/esSupport.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    output: {
        filename: 'esSupport.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'typeof globalThis !== \'undefined\' ? globalThis : typeof self !== \'undefined\' ? self : this',
        library: {
            name: 'es-support',
            type: 'umd',
        },
    },
    mode: 'production',
    optimization: {
        usedExports: true,
    },
};
