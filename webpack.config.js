const webpack = require('webpack'); //webpack本体
const path = require('path') //pathの処理
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin'); //cssを取り出す
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries'); //不要なjsファイルを生成しない
const scssSettings = require(path.resolve(__dirname, 'scssSettings'));// SCSSのコンパイルの設定


module.exports = (env,argv) => {
  const MODE = argv.mode;
  const IS_DEVELOPMENT = argv.mode === 'development';//開発中
  const IS_PRODUCTION = argv.mode === 'production';//本番
  return {
    mode: MODE,
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : 'eval',
    entry: {
      style: './scss/style'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname,'docs'),
    },
    resolve: {
      extensions: ['.scss'],
    },
    module: {
      rules: [
        scssSettings
      ]
    },
    plugins: [
      new FixStyleOnlyEntriesPlugin(),
      new ExtractCssChunks({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  }
};
