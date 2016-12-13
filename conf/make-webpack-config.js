const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function ({ isProd }) {
  const sourcePath = path.join(__dirname, '..', 'app');
  const staticsPath = path.join(__dirname, '..', 'dist');

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({ template: '../conf/tmpl.html' }),
  ];

  if (isProd) {
    plugins.push(...[
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false
        },
      }),
      new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
      }),
    ]);
  } else {
    plugins.push(...[
      new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('development')}
      }),
      new webpack.HotModuleReplacementPlugin(),
    ]);
  }

  return {
    devtool: isProd ? 'source-map' : 'eval',
    context: sourcePath,
    entry: {
      js: './src/index.jsx',
      vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk']
    },
    output: {
      path: staticsPath,
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime'],
            presets: [
              ['es2015', { modules: false }],
              'react',
            ],
            env: {
              development: {
                presets: [
                  'react-hmre',
                ],
              },
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, '..', 'node_modules'),
        sourcePath
      ]
    },
    plugins,
    devServer: {
      contentBase: './',
      historyApiFallback: true,
      port: 3000,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  };
};
