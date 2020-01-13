const path = require('path');

module.exports = {
  // entry file
  entry: ['@babel/polyfill', './lib/index.mjs'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fxjs.js'
  },
  module: {
    rules: [
      {
        test: /\.spec\.js$/,
        include: [
          path.resolve(__dirname, 'lib')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};