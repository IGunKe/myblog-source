# 入门

vue-router路由: 
* 单页应用不会有那么多html 让我们跳转 所有要使用路由做页面的跳转
* Vue 路由允许我们通过不同的 URL 访问不同的内容

## 构建项目
```shell
npm init vue@latest
//&
npm init vite@latest
```
vue3 ---- router4,vue2 ----- router3
```shell
npm i vue-router@4
```

```js
import { createRouter, createWebHistory } from 'vue-router';
//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory
import Hello from '../components/Hello.vue';
import Hello2 from '../components/Hello2.vue';
import List from '../components/List.vue';
const routes = [
    {
        path: '/hello',
        component: Hello,
        
    },
    {
        path: '/',
        component: List
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
```