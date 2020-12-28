const path = require('path');
postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
      before: function(app, server) {
          server._watch('./dist/**/*.html')
      },
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      port: 3000,
      host: '0.0.0.0'
  },
  mode: 'development',
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader', { loader: "postcss-loader", options: { postcssOptions: { plugins: postCSSPlugins } } }],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'assets/resource',
          },
          {
              test: /\.(csv|tsv)$/i,
              use: ['csv-loader'],
          },
          {
              test: /\.xml$/i,
              use: ['xml-loader'],
          },
      ],
  }
};