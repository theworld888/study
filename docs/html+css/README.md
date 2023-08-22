## 1. HTML5 新特性

1. 新的语义化元素：header、nav、main、aside、section、footer...
2. 表单控件：date、time、email、url、search、color...
3. 新 API：
   1. audio 和 video
   2. canvas 元素
   3. 本地存储：localStorage，sessionStorage
   4. 多线程操作：Web Worker

## 2. 语义化的理解

`是什么`：根据页面的内容结构，选择合适的 HTML 标签。

`优点`：

 	1. 对机器友好，有利于搜索引擎的爬虫获取有效信息，利于 SEO 优化。有利于读屏软件根据内容自动生成目录。
 	2. 对开发者友好，增强可读性，利于开发维护。

## 3. 讲述行内、块级、行内块元素，和区别

### 3.1 行内元素

- 常见标签：`a、span、sub、sup、strong、b、em、i、label、br()`
- 特点：
  - 一行能存在多个
  - 无法设置宽、高，宽度随文本内容变化。padding 和 margin 不能设置垂直方向。可以设置 line-height
  - 内部可包含 `行内元素` 和 `文本`，（a 标签特殊，内部可存放块级元素，但不能再放一个a标签）

### 3.2 块级元素

- 常见标签：`div、p、h1~h6、ul、ol、dl、li、table、form、hr`
- 特点：
  - 独占一行
  - 可以设置宽、高、padding、margin，宽度默认为父元素宽度
  - 可包含块级、行内元素、但文本标签 `h1、p`标签不推荐包含非文本内容

### 3.3 行内块元素

- 常见标签：`img、input、button、th、td (tr是行内元素，不可以设置宽度)`
- 特点：
  - 一行存在多个，但是有间隙
  - 可设置 width、height、padding、margin
  - 宽度随文本变化

### 3.4 扩展：如何解决 行内块元素之间的空隙？

1. 手动去除空格、缺点是不美观
2. margin设置负数
3. font-size 设置 0，缺点是 子元素如果要设置字体，还需重新设置
   - `替换元素不会继承默认不会发生继承，有默认的样式，要通过 CSS 来设置，有input、img、video、audio、canvas`

## 4. 谈谈 iframe（是块级元素）

`是什么`：

- 是一个html 中的标签，他可以创建一个独立的内联框架，来实现在一个页面中嵌入另一个页面

`用处`：

- 常用的场景有，在页面中嵌入其他网站的内容，如谷歌地图，广告等，可以将外部页面无缝的显示出来,

- 前端微应用，A系统接入B系统
- 引入已经写好的页面功能，比如：视频、客服页面

### 4.1 父子间通信

#### 同源

```js
// 获取子页面数据
aframe.contentWindow.document.querySelector("h1").innerHTML

// 获取父页面数据
window.parent.document.querySelector("h1").innerHTML
```

#### 不同源

```js
// 父页面传递信息给子页面
iframe.contentWindow.postMessage('传递的数据','http://127.0.0.1:5501/b.html')

// 子页面传递数据
window.parent.postMessage('传递的数据','http://127.0.0.1:5500/b.html')

// 接收数据
window.onMessage = function (e){
    console.log(e.data)
}
```



### 4.2 扩展：html页面组成

`document > 初始包含块 > html > body`

- html 不推荐直接设置样式，某些样式会设置到document
- body内的元素设置absolute，是相对与初始包含块
- html的滚动条其实是设置给初始包含块

## css

继承:哪些属性会继承

## 1. css 新特性

1.  新增选择器
2. 新增边框属性
3. 颜色与不透明度
4. 阴影
5. transform 变形
6. 过渡与动画
7. 媒体查询

## 2. 盒模型

- w3c 盒模型

实际宽度 =  width ( content ) + border + padding + margin

- IE 盒模型

实际宽度 = width ( content + padding + border ) + margin

## 3. BFC

`是什么`：块级格式化上下文，指的是：一个独立渲染的区域，让处于 BFC 内部的元素与外部的元素相互隔离，内外元素的定位不会相互影响。

`具体规则`：

1. 是一个独立容器，内部元素不会影响外部元素
2. 同一个 BFC 的两个盒子margin会发生合并，取较大值
3. 计算 BFC 高度时，浮动元素参与计算

`怎么开启`：

1. 设置 overflow：非 visible
2. 设置 float：非 none
3. 设置 **position**: absolute | fiexed 
4. 设置 display：inline-block、flex、grid、table-cell （ 非none 非inline 非block）

`具体使用`：

- 防止 margin 重叠
- 清除浮动，防止父元素高度塌陷
- 给标准流元素开启 BFC ，防止被浮动元素覆盖

## 4. 选择器优先级

`!important` > `行内样式` > `#id` > `.class` > `tag` > `*` > `继承` > `默认` 

- 选择器不建议多层次嵌套，`从右往左`解析

## 5. CSS 预处理器(Sass/Less/Stylus)

CSS 预处理器是一种工具，通过添加类似于编程语言的语法来对 CSS进行了增强和扩展。

它们提供了变量、嵌套规则、混合、函数等功能，提高样式的复用和可维护性。

一些常见的 CSS 预处理器包括 Sass、Less 和 Stylus。

它们将预处理器代码编译成普通的 CSS 文件供网页使用。

## 6. flex 布局

### 6.1 父级属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### 6.2 子级属性

- `order`
- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `flex`
- `align-self`

## 7. 两栏布局

- flex
- float

## 8. 隐藏元素

1.  `display: none` 不占位。不会响应 DOM 事件。 
2.  `opacity: 0` 占位，但不可见。会响应 DOM 事件。 
3.  `visibility: hidden` 占位，但不可见。不会响应 DOM 事件。 
4.  `position: absolute; left: -10000px` 移动到屏幕外 
5.  `z-index: -1` 将别的定位元素遮盖掉当前元素 

## 9. 水平居中

1. flex
2. absolute + transform: translate
3. absolute + margin 缺点: margin 负值要手动计算
4. absolute + margin:auto
5. grid 布局 兼容性差
6. table布局（不考虑）