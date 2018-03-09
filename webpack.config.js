/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const now = new Date()
const npmPackage = require('./package.json')
const version = npmPackage.version + '.' + now.getTime()
const banner = 'v' + version + ' © ' + now.getFullYear() + ' AwayTeam, LLC'

module.exports = function(env) {
  return {
    mode: 'development',
    entry: {
      app: path.resolve(__dirname, 'src/index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env': {
          REACTOTRON: JSON.stringify(true),
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          BROWSER: JSON.stringify(true),
          VERSION: JSON.stringify(version),
          AMPLIFY: JSON.stringify({
            identityPoolId: '<INSERT_VALUE>',
            region: '<INSERT_VALUE>',
            userPoolId: '<INSERT_VALUE>',
            userPoolWebClientId: '<INSERT_VALUE>',
          }),
        }
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
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
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.join(__dirname, 'src'),
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel']
            }
          }
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
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
              loader: "sass-loader",
              options: {
                  includePaths: [
                    require('bourbon').includePaths,
                    require('bourbon-neat').includePaths,
                  ]
              }
            }
          ]
        },
      ]
    }
  }
}
