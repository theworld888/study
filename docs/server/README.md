# 1. 谈谈 http 模型

## 1.1 概念

- http 全称超文本传输协议，应用层的协议，是浏览器与服务器之间通信的协议，基于 TCP 协议
- TCP 和 UDP 都是属于传输层的协议 
  - TCP 是可靠型协议，需要三次握手连接，有丢包补发机制
  - UDP 是不可靠协议，不需要握手，丢包不管，一般用于实时通讯

## 1.2 报文

1. 协议通信的内容我们称为报文。
2. 浏览器发送给服务器的叫请求报文，服务器返回给浏览器的叫做响应报文
3. 报文组成：`报文首行`、`报文头部（响应头/请求头）`、`空行`、`报文体（响应体/请求体）`



## 1.3 请求报文

1. 请求首行
   - `GET` 请求方式
   - `http://localhost:8000/src/api/product/trademark` 请求地址
   - `HTTP` 协议名
   - `1.1` 版本号

2. 请求头
   - `Connection: keep-alive` 保持长链接
   - `Content-Type` 请求体参数类型
     - `application/json` json格式数据
     - `application/x-www-form-urlencoded` form表单提交数据格式
   - `User-Agent` 用户代理
   - `Referer` 请求来源地址
   - `Cookie`

3. 空行

4. 请求体

## 1.4 响应报文

1. 响应首行
   - `HTTP` 协议名
   - `1.1` 版本号
   - `200` 响应状态码
   - `OK` 响应状态码文本内容

2. 响应头
   - `access-control-allow-origin` cors允许跨域
   - `content-type` 响应体数据类型
   - `Cache-Control` 强制缓存控制
   - `Etag / Last-Modifined` 协商缓存控制

3. 空行

4. 请求体



# 2. http1.1和http2.0的区别

1. 二进制格式
   - 1.1 版本中,报文的头信息必须是文本，报文体可以是文本或者二进制，
   - 2.0 版本两者都需要是二进制，统称为帧，分为头信息帧和数据帧，帧是实现多路复用的基础
2. 多路复用
   - 1.1 长连接复用为若干个请求队列串行化单线程处理，后面的请求等待前面的请求返回才能获得执行机会，一旦有请求超时，后续的请求只能被阻塞
   - 2.0 依然使用 TCP 连接，但是采用多路复用，在同一个连接里，客户端和服务器都可以`同时发送`多个请求或者回应，不用一一顺序发送，解决了队头阻塞的问题。
3. 头部压缩
   - 1.1 在每次请求时都会携带所有的头部信息，造成带宽的浪费
   - 2.0 采用头部压缩技术，首行字段会在客户端和服务端之间维护一个表格，使得相同的头部只传输一次，通过索引进行引用，减少带宽占用和传输时间
4. 服务器推送
   - 2.0 允许服务器，主动向客户端发送资源，无需客户端明确的请求，可以减少延迟和顺序请求次数



# 3. HTTP 和 HTTPS 的区别

1. HTTP 协议是超文本传输协议，连接很简单，是无状态的，信息是明文传输的，HTTPS 协议是有 SSL 和 HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 更加安全；
2. 连接方式不同，默认端口也不相同，HTTP 默认是 80，HTTPS 默认端口是 443
3. HTTPS 协议需要申请 CA 证书



# 4. TCP 的三次握手和四次挥手

## 4.1 三次握手

`目的`：为了确认双方都具有接收和发送能力

## 4.2 四次挥手

`原因`： TCP 连接是`全双工通信`，需要分别释放到对方的连接，单独一方释放，只代表不能向对方发送数据，连接处于半释放的状态



# 5. 当在浏览器输入一个地址后，按下回车发生了什么？



1. 解析 URL
2. 缓存判断
3. DNS 解析
4. TCP 三次握手
5.  发送请求
6. 返回数据
7. 页面渲染
8. TCP 四次挥手











## 1. 解析 URL

`解析 URL 合法性和有效性`



## 2. 缓存判断

`判断是否有缓存`



## 3. DNS 解析

`将域名地址解析为ip地址`



## 4. TCP 三次握手

`确认接收双方的接受能力和发送能力都正常`



## 5. 发送请求



## 6. 返回数据



## 7. 页面渲染



## 8. TCP 四次挥手

`TCP 连接是全双工的连接，所以需要双方分别断开连接，单独一方释放连接，只代表不能再向对方发送数据，处于半释放状态`



# 6. 强制缓存和协商缓存

`概念`：浏览器会对请求的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力

- 强制缓存
- 协商缓存





# 7. WebSocket

`概念`：

- 是 HTML5 提供的一种浏览器与服务器进行 全双工通讯的网络协议，属于应用层协议
- 基于 TCP 传输协议，复用 HTTP 的握手通道，浏览器与服务器只需要进行一次握手，两者之间就可以直接创建持久性的连接
- 服务端和浏览器都可以主动推送消息，可以实现双向数据通信

`API`：

1. 构造函数

- `new WebSocket(url[, protocols])`
  - `url`: 连接 WebSocket 服务器地址    一般长    ws://                     http://
  - `protocols`: 一个协议字符串或者一个包含协议字符串的数组

2. 实例方法

- `close()`: 关闭 WebSocket 连接
- `send(data)`:  发送消息给 WebSocket 服务器

3. 事件

- `close`: 监听 WebSocket 关闭的事件
- `error`：监听 WebSocket 错误的事件
- `message`：监听客户端接受消息的事件
- `open`：监听 WebSocket 连接好的事件

`应用`：主要用于实时聊天，实时传输视频数据，大屏展示实时传递数据



# 8. 谈谈 ajax

```js
// 1. 创建 xhr 对象
cosnt xhr = new XMLHttpRequest()
// 2. 设置请求方法和地址
xhr.open('GET','http://xxx/xx')
// 3. 发送请求
xhr.send()
// 4. 绑定事件，处理服务端返回的结果
xhr.onreadystatechange = function(){
    /*
     0 － （未初始化）还没有调用send()方法
     1 － （载入）已调用send()方法，正在发送请求
     2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
     3 － （交互）正在解析响应内容
     4 － （完成）响应内容解析完成，可以在客户端调用了
    */
    if(xhr.readystate === 4){
        if(xhr.status>=200 && xhr.status<300){
            console.log(xhr.response)
        }else{
			// 失败
        }
    }
}
```



# 9. 跨域

`是什么`：

- 违背同源策略就会产生跨域，同源指的是：协议、ip、端口号三者必须完全一致

- 请求分为普通请求、ajax请求，只有浏览器端的 ajax 请求存在跨域，服务器与服务器之间没有跨域、浏览器的 script、img、form 等标签都没有跨域。

`如何解决`：

1. `jsonp`: 利用 script 标签可以跨域特性进行跨域。
2. `cors`: 服务器设置特定响应头即可实现。
3. `NodeJS代理服务器`
4. `Nginx代理服务器`



# 10. nginx




















