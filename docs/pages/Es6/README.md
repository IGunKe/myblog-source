# ECMAScript 6 简介

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了

## ECMAScript 和 JavaScript 的关系
ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现

## Babel 转码器
Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码, 例如：
```js
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```
安装 Babel
```shell
$ npm install --save-dev @babel/core
```

配置文件.babelrc
Babel 的配置文件是.babelrc，存放在项目的根目录下,用来设置转码规则和插件，基本格式如下
```js
{
  "presets": [],
  "plugins": []
}
```
presets字段设定转码规则:
```shell
# 最新转码规则
$ npm install --save-dev @babel/preset-env

# react 转码规则
$ npm install --save-dev @babel/preset-react
```
然后，将这些规则加入.babelrc
```json
{
    "presets": [
      "@babel/env",
      "@babel/preset-react"
    ],
    "plugins": []
  }
```
## 命令行转码
Babel 提供命令行工具@babel/cli，用于命令行转码。
```shell
npm install --save-dev @babel/cli
```
用法：
```shell
# 转码结果输出到标准输出
$ npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
# 或者
$ npx babel src -d lib

# -s 参数生成source map文件
$ npx babel src -d lib -s
```
## babel-node
@babel/node模块的babel-node命令，提供一个支持 ES6 的 REPL 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。
```shell
$ npm install --save-dev @babel/node
```
编译
```shell
npx babel-node js文件
```
