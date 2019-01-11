const path = require('path');
const version = require("./package.json").version;
const nodeExternals = require('webpack-node-externals');

    "/**\n" +

    " * vue-markdown v" + version + "\n" +

    " * https://github.com/DavidCouronne/mathssyfy/issues\n" +

    " * MIT License\n" +

    " */\n";



module.exports = {
    mode: 'production',
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'plugin-markdown.common.js',
        library: 'PluginMarkdown',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /* {
                test: /\.js$/,

                use: ['babel-loader'],

                exclude: /node_modules/
            }, */
            {

                test: /\.json$/,

                use: ['json-loader']

            }

        ]
    }
};