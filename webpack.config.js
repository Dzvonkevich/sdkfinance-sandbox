const path = require('path');

module.exports = {
  entry: './components/app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};