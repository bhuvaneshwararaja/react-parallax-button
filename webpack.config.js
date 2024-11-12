const path = require('path');

module.exports = {
  entry: './index.js', // This is where your exports are located
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'reactjs-parallax-button', // This can be anything you want
    libraryTarget: 'umd', // Universal Module Definition for compatibility
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
