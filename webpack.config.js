/**
 * webpack.config.js webpack的配置文件
 * 基于nodejs的模块化 默认采用commonjs
*/


//resolve 用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
  //入口起点
  entry: './src/index.js',
  //输出
  output: {
    //输出的文件名
    filename: 'build.js',
    //输出路径
    //__dirname nodejs的变量 代表当前目录的绝对路径（输出到当前路径下的build文件夹下）
    path: resolve(__dirname, 'build')
  },
  //loader的配置
  module: {
    rules: [
      //详细的loader的配置
      {
        //匹配那些文件
        test: /\.css$/,
        //使用那些loader来处理
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  //plugins的配置
  plugins: [
    //详细的plugins的配置
  ],
  //模式
  mode: 'development',
  // mode:'production'
  
  
}