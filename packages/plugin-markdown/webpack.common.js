const path = require('path')
const version = require('./package.json').version
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

'/**\n' +

    ' * @mathssyfy/plugin-markdown v' + version + '\n' +

    ' * https://github.com/DavidCouronne/mathssyfy/issues\n' +

    ' * MIT License\n' +

    ' */\n'

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
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme.css'
    })
  ],
  module: {
    rules: [
      {
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
      {
        test: /\.json$/,

        use: ['json-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'

        ]
      }
    ]
  }
}
