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
        //匹配那些文件（这里是匹配.css结尾的样式资源）
        test: /\.css$/,
        //使用那些loader来处理
        use: [
          //use数组中的loader执行的顺序是从右到左边 从下到上 依次执行
          //创建style标签，将js 中的样式资源插入进行，添加到header中生效
          'style-loader',
          //将css文件变成commonjs模块加载js中，里面的内容是样式字符串
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