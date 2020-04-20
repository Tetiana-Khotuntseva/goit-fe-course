const path = require('path');
console.log('DIRNAME: ', __dirname);

module.export = {
  entry: './src/index.js',
  output: {
    path: path.resolve(
      '/Users/tanya/goit-fe-course/javaScript/goit-js-hw-10',
      'dist',
    ),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
      },
    ],
  },
};
