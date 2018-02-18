var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-es2015'
            ]
          }
        }
      },
      {
        test: /\.xml$/,
        use: {
          loader: 'xml-loader'
        }
      } // will load all .xml files with xml-loader by default
    ]
  }
};