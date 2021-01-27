/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("/**\n * index.js 作为打包文件主入口\n * 运行指令：\n * 1.1开发环境(webpack4)：webpack ./src/index.js -o ./build/build.js --mode=development\n *  webpack 将./src/index.js进行打包 打包输出地址为./build/build.js 打包的模式为开发环境\n * 1.2生产环境：webpack ./src/index.js -o ./build/build.js --mode=production\n * \n * **/\nfunction add(x, y) {\n  return x + y;\n}\n\nconsole.log(add(1,2));\n\n\n//# sourceURL=webpack://webpack5_stu/./src/index.js?");
/******/ })()
;