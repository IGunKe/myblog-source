# webpack简介

webpack静态资源打包工具，输出编译好的文件，如less等编译为css，使得可以在浏览器直接运行
<br>
webpack本身只能编译js文件。
```js
//资源目录
src: 源代码目录
  --main.js: 入口文件
```
```shell
npm init -y 初始化基础打包文件
npm  i webpack webpack-cli -D
npx webpack ./src/main.js --mode=development 
开发模式只可以编译es6模块语法，es6语法还不可以编译
npx webpack ./src/main.js --mode=production
```