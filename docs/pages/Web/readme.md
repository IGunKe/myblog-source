# webSocket

之所以有了http协议还要在搞一个webSocket协议的原因是：<br>
1. http有一个缺陷：只能有client发起请求
2. 只能是客户端向服务器发出请求，服务器返回查询结果。HTTP 协议做不到服务器主动向客户端推送信息。

webSocket最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话
* 无需额外的 HTTP 请求。
```webSocket协议 通常是ws和wss```
## 客户端api
1. webSocket为构造函数，通过new获取实例
2. readyState状态
* connecting：值为0，表示正在连接
* open      ：值为1，表示连接成功
* closing   ：值为2，表示正在关闭
* closed    ：值为3，表示连接关闭，或者连接失败
3. onopen
用于指定连接成功后的回调函数
4. onclose
用于指定连接关闭后的回调函数
5. onmessage
用于指定收到服务器数据后的回调函数，通过event.data获取数据
6. send
方法用于向服务器发送数据，通常将send写在open中
```js
//server
const express = require('express');
const app = express();
//后端长连接
const ws = require('express-ws');
//getWss 返回当前的连接池
const wss = ws(app).getWss('/talk');

app.ws('/talk', (ws, req) => {
	let msg1 = JSON.parse(msg);
    console.log(msg1.name);
    //onmessage
    ws.on('message', msg => {
        console.log(msg);
        wss.clients.forEach(w => {
            w.send(msg)
        })
    })
})
app.listen(9001, () => {
    console.log('ws://localhost:9001/talk')
})
```
```js
//client
const sendMessage = () => {
    const type = prompt('请输入内容');
    console.log(type);
    let ws = new WebSocket('ws://localhost:9001/talk');
    ws.onopen = () => {
        console.log('success');
        ws.send(JSON.stringify(msg));
    }
    ws.onmessage = (e) => {
        console.log(JSON.parse(e.data));
    }
    
}
```