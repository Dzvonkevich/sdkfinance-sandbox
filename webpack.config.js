const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development'; 
const webpack  = require('webpack'); 

module.exports = {
  entry: './components/app/app.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'app',
  },

  watch: NODE_ENV == 'development',

  devtool: NODE_ENV == 'development' ? "source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
};
