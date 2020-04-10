const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
  },
  optimization: {
    // voor gebruik van plugin-transform-runtime optimalizatie
    usedExports: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      // Eerst ESlint runnen, voor de Babel transpile
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /protoc/, /_pb/],
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      // transpile js(x) met Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // Don't waste time on Gzipping the cache
            cacheCompression: false,
          },
        },
      },
      // laad CSS bestanden die via "import "xyz.csv" gelinkt zijn
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // inladen fonts als bestanden
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      // inladen figuren als bestanden
      {
        test: /\.(png|ico)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        }],
      },
    ],
  },
  resolve:
  // hoe modules opgezocht worden
  {
    extensions: ['*', '.js', '.jsx'],
  },
}
