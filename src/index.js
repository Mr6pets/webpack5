/**
 * index.js 作为打包文件主入口
 * 运行指令：
 * 1.1开发环境(webpack4)：webpack ./src/index.js -o ./build/build.js --mode=development
 * 1.1开发环境(webpack5)：webpack bundle --mode=development
 *  webpack 将./src/index.js进行打包 打包输出地址为./build/build.js 打包的模式为开发环境
 * 1.2生产环境(webpack4)：webpack ./src/index.js -o ./build/build.js --mode=production
 * 
 * **/
function add(x, y) {
  return x + y;
}

console.log(add(1,2));
