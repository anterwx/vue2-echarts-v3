var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js', //打包入口文件
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "bundle-[hash].js" //哈希值添加到打包文件名中
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  devtool: 'eval-source-map', //调试的source-map
  devServer: {
    contentBase: './static', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //SPA不跳转
    inline: true,
    hot: true
  },
  module: {
    loaders: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    //代码版权信息
    new webpack.BannerPlugin('©copyright by moors.cn'),
    //将js、css动态引用到指定模板中，生成dist/index.html页面
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../static/index.tmpl.html")
    }),
    //热加载插件
    new webpack.HotModuleReplacementPlugin(),
    //为组件分配ID
    new webpack.optimize.OccurrenceOrderPlugin(),
    //压缩
    new webpack.optimize.UglifyJsPlugin({
      // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句 还可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      }
    }),
    //清除文件目录文件
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist/*.*')], {})
  ]
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ])
// }