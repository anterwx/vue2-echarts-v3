'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 加速你的代码构建
// const HappyPack = require('happypack')
// const os = require('os')
// const HappyThreadPool = HappyPack.ThreadPool({
//   size: os.cpus().length
// }); // 启动线程池});

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

// 只检查本地的*.vue文件的语法，第三方忽略
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    // vendors: ['vue', 'vue-router', 'vue-resource', 'element-ui', 'echarts', 'echarts-liquidfill', 'lodash.debounce'],
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      // {
      //   test: /\.vue$/,
      //   use: [{
      //     loader: 'happypack/loader?id=vue',
      //     options: vueLoaderConfig
      //   }]
      // },
      // {
      //   test: /\.js$/,
      //   include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
      //   use: [{
      //     loader: 'babel-loader',
      //     loader: 'happypack/loader?id=babel',
      //     options: vueLoaderConfig
      //   }]
      // },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // plugins: [
  //   new HappyPack({
  //     id: "vue",
  //     loaders: ['vue-loader']
  //   }),
  //   new HappyPack({
  //     id: 'babel',
  //     loaders: ['babel-loader?cacheDirectory']
  //   })
  // ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
