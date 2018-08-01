const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["latest"]
        }
      }
    }
  ]
}

};