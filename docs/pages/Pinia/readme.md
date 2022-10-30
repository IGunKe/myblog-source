# pinia

特定： 
1. 完整的 ts 的支持；
2. 足够轻量，压缩后的体积只有1kb左右;
3. 去除 mutations，只有 state，getters，actions；
4. actions 支持同步和异步；
5. 代码扁平化没有模块嵌套，只有 store 的概念，store 之间可以自由使用，每一个store都是独立的
6. 无需手动添加 store，store 一旦创建便会自动添加；
7. 支持Vue3 和 Vue2

## 安装
```shell
npm i pinia@latest
```
## 引入注册vue3
```js
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
 
const store = createPinia()
let app = createApp(App)
 
 
app.use(store)
 
app.mount('#app')
```

vue2使用
```js
import { createPinia, PiniaVuePlugin } from 'pinia'
 
Vue.use(PiniaVuePlugin)
const pinia = createPinia()
 
new Vue({
  el: '#app',
  // other options...
  // ...
  // note the same `pinia` instance can be used across multiple Vue apps on
  // the same page
  pinia,
})
```
## 定义store
1. Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字
2. defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
### option store
```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```
### setup store
在 Setup Store 中：
1. ref() 就是 state 属性
2. computed() 就是 getters
3. function() 就是 actions

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
//定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象
  return { count, increment }
})
```
## 使用store
在setup中调用定义的store