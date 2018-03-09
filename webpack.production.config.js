/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin")
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const now = new Date()
const npmPackage = require('./package.json')
const version = npmPackage.version + '.' + now.getTime()
const banner = 'v' + version + ' © ' + now.getFullYear() + ' AwayTeam, LLC'

module.exports = function(env) {
  return {
    mode: 'production',
    entry: {
      app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    performance: { 
      hints: false,
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env': {
          REACTOTRON: JSON.stringify(false),
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          BROWSER: JSON.stringify(true),
          VERSION: JSON.stringify(version)
        }
      }),
      new webpack.BannerPlugin({ 
        banner: banner 
      }),
      new HtmlWebpackPlugin({
        title: 'Application Name',
        hash: true,
        filename: 'index.html',
        template: 'src/templates/index.html'
      }),
      new FaviconsWebpackPlugin({
        logo: './assets/images/favicon.png',
        prefix: 'icons-[hash]/',
        emitStats: true,
        statsFilename: 'iconstats-[hash].json',
        persistentCache: true,
        inject: true,
        title: 'Application Name',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),
      new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        disable: process.env.NODE_ENV === 'development',
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new UglifyJsPlugin(),
      new MinifyPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0
      }),
      // new BundleAnalyzerPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.join(__dirname, 'src'),
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader',
        },
        {
          test: /\.(css|sass|scss)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: { 
                  importLoaders: 1 
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('postcss-cssnext')({ warnForDuplicates: false }),
                    require('autoprefixer')(),
                    require('cssnano')(),
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    require('bourbon').includePaths,
                    require('bourbon-neat').includePaths,
                  ]
                }
              }
            ],
            fallback: 'style-loader',
          })
        },
      ]
    }
  }
}
