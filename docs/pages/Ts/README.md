# 什么是 TypeScript
* 添加了静态类型系统的 JavaScript
* TypeScript 是弱类型，完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性
* TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。
  
# 安装 TypeScript

TypeScript 的命令行工具安装方法如下：
```shell
npm install -g typescript
```

编译一个 TypeScript 文件:
```
tsc hello.tsc
```

# Hello TypeScript

例子```hello.ts```：
```js
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```
编译执行
```tsc hello.ts```
生成一个编译好的文件 hello.js:
```js
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```
<font color=red>注意：</font>TypeScript 只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错。
