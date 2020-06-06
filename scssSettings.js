//sass-loaderの設定
const SASS_LOADER = {
  loader: 'sass-loader',
  options: {
    implementation: require('sass', {
      outputStyle : 'expanded',
    }),
    sassOptions: {
      fiber: require('fibers'),
    },
  },
};

//postcss-loaderの設定
const POST_CSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: [
      require('postcss-object-fit-images'),
    ],
  }
};

//css-loaderの設定
const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    url: false,
    sourceMap: true,
  },
};

const scss = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: require('extract-css-chunks-webpack-plugin').loader,
    },
    CSS_LOADER,
    POST_CSS_LOADER,
    SASS_LOADER
  ],
};

module.exports = scss;
