import path from 'path';
import webpack from 'webpack';
import nodemonPlugin from 'nodemon-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: false,
    }),
    new nodemonPlugin(),
  ],
};
