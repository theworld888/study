(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{305:function(t,a,s){"use strict";s.r(a);var _=s(14),v=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"html-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-css"}},[t._v("#")]),t._v(" html+css")]),t._v(" "),a("h2",{attrs:{id:"_1-html5-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-html5-新特性"}},[t._v("#")]),t._v(" 1. HTML5 新特性")]),t._v(" "),a("ol",[a("li",[t._v("新的语义化元素：header、nav、main、aside、section、footer...")]),t._v(" "),a("li",[t._v("表单控件：date、time、email、url、search、color...")]),t._v(" "),a("li",[t._v("新 API：\n"),a("ol",[a("li",[t._v("audio 和 video")]),t._v(" "),a("li",[t._v("canvas 元素")]),t._v(" "),a("li",[t._v("本地存储：localStorage，sessionStorage")]),t._v(" "),a("li",[t._v("多线程操作：Web Worker")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-语义化的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-语义化的理解"}},[t._v("#")]),t._v(" 2. 语义化的理解")]),t._v(" "),a("p",[a("code",[t._v("是什么")]),t._v("：根据页面的内容结构，选择合适的 HTML 标签。")]),t._v(" "),a("p",[a("code",[t._v("优点")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("对机器友好，有利于搜索引擎的爬虫获取有效信息，利于 SEO 优化。有利于读屏软件根据内容自动生成目录。")]),t._v(" "),a("li",[t._v("对开发者友好，增强可读性，利于开发维护。")])]),t._v(" "),a("h2",{attrs:{id:"_3-讲述行内、块级、行内块元素-和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-讲述行内、块级、行内块元素-和区别"}},[t._v("#")]),t._v(" 3. 讲述行内、块级、行内块元素，和区别")]),t._v(" "),a("h3",{attrs:{id:"_3-1-行内元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-行内元素"}},[t._v("#")]),t._v(" 3.1 行内元素")]),t._v(" "),a("ul",[a("li",[t._v("常见标签："),a("code",[t._v("a、span、sub、sup、strong、b、em、i、label、br()")])]),t._v(" "),a("li",[t._v("特点：\n"),a("ul",[a("li",[t._v("一行能存在多个")]),t._v(" "),a("li",[t._v("无法设置宽、高，宽度随文本内容变化。padding 和 margin 不能设置垂直方向。可以设置 line-height")]),t._v(" "),a("li",[t._v("内部可包含 "),a("code",[t._v("行内元素")]),t._v(" 和 "),a("code",[t._v("文本")]),t._v("，（a 标签特殊，内部可存放块级元素，但不能再放一个 a 标签）")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-2-块级元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-块级元素"}},[t._v("#")]),t._v(" 3.2 块级元素")]),t._v(" "),a("ul",[a("li",[t._v("常见标签："),a("code",[t._v("div、p、h1~h6、ul、ol、dl、li、table、form、hr")])]),t._v(" "),a("li",[t._v("特点：\n"),a("ul",[a("li",[t._v("独占一行")]),t._v(" "),a("li",[t._v("可以设置宽、高、padding、margin，宽度默认为父元素宽度")]),t._v(" "),a("li",[t._v("可包含块级、行内元素、但文本标签 "),a("code",[t._v("h1、p")]),t._v("标签不推荐包含非文本内容")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-3-行内块元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-行内块元素"}},[t._v("#")]),t._v(" 3.3 行内块元素")]),t._v(" "),a("ul",[a("li",[t._v("常见标签："),a("code",[t._v("img、input、button、th、td (tr是行内元素，不可以设置宽度)")])]),t._v(" "),a("li",[t._v("特点：\n"),a("ul",[a("li",[t._v("一行存在多个，但是有间隙")]),t._v(" "),a("li",[t._v("可设置 width、height、padding、margin")]),t._v(" "),a("li",[t._v("宽度随文本变化")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-扩展-如何解决-行内块元素之间的空隙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-扩展-如何解决-行内块元素之间的空隙"}},[t._v("#")]),t._v(" 3.4 扩展：如何解决 行内块元素之间的空隙？")]),t._v(" "),a("ol",[a("li",[t._v("手动去除空格、缺点是不美观")]),t._v(" "),a("li",[t._v("margin 设置负数")]),t._v(" "),a("li",[t._v("font-size 设置 0，缺点是 子元素如果要设置字体，还需重新设置\n"),a("ul",[a("li",[a("code",[t._v("替换元素不会继承默认不会发生继承，有默认的样式，要通过 CSS 来设置，有input、img、video、audio、canvas")])])])])]),t._v(" "),a("h2",{attrs:{id:"_4-谈谈-iframe-是块级元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-谈谈-iframe-是块级元素"}},[t._v("#")]),t._v(" 4. 谈谈 iframe（是块级元素）")]),t._v(" "),a("p",[a("code",[t._v("是什么")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("是一个 html 中的标签，他可以创建一个独立的内联框架，来实现在一个页面中嵌入另一个页面")])]),t._v(" "),a("p",[a("code",[t._v("用处")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("常用的场景有，在页面中嵌入其他网站的内容，如谷歌地图，广告等，可以将外部页面无缝的显示出来,")])]),t._v(" "),a("li",[a("p",[t._v("前端微应用，A 系统接入 B 系统")])]),t._v(" "),a("li",[a("p",[t._v("引入已经写好的页面功能，比如：视频、客服页面")])])]),t._v(" "),a("h3",{attrs:{id:"_4-1-父子间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-父子间通信"}},[t._v("#")]),t._v(" 4.1 父子间通信")]),t._v(" "),a("h4",{attrs:{id:"同源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源"}},[t._v("#")]),t._v(" 同源")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取子页面数据")]),t._v("\naframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取父页面数据")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"不同源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同源"}},[t._v("#")]),t._v(" 不同源")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父页面传递信息给子页面")]),t._v("\niframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"传递的数据"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:5501/b.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子页面传递数据")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"传递的数据"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:5500/b.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收数据")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onMessage")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-2-扩展-html-页面组成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-扩展-html-页面组成"}},[t._v("#")]),t._v(" 4.2 扩展：html 页面组成")]),t._v(" "),a("p",[a("code",[t._v("document > 初始包含块 > html > body")])]),t._v(" "),a("ul",[a("li",[t._v("html 不推荐直接设置样式，某些样式会设置到 document")]),t._v(" "),a("li",[t._v("body 内的元素设置 absolute，是相对与初始包含块")]),t._v(" "),a("li",[t._v("html 的滚动条其实是设置给初始包含块")])]),t._v(" "),a("h2",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),a("p",[t._v("继承:哪些属性会继承")]),t._v(" "),a("h2",{attrs:{id:"_1-css-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-新特性"}},[t._v("#")]),t._v(" 1. css 新特性")]),t._v(" "),a("ol",[a("li",[t._v("新增选择器")]),t._v(" "),a("li",[t._v("新增边框属性")]),t._v(" "),a("li",[t._v("颜色与不透明度")]),t._v(" "),a("li",[t._v("阴影")]),t._v(" "),a("li",[t._v("transform 变形")]),t._v(" "),a("li",[t._v("过渡与动画")]),t._v(" "),a("li",[t._v("媒体查询")])]),t._v(" "),a("h2",{attrs:{id:"_2-盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-盒模型"}},[t._v("#")]),t._v(" 2. 盒模型")]),t._v(" "),a("ul",[a("li",[t._v("w3c 盒模型")])]),t._v(" "),a("p",[t._v("实际宽度 = width ( content ) + border + padding + margin")]),t._v(" "),a("ul",[a("li",[t._v("IE 盒模型")])]),t._v(" "),a("p",[t._v("实际宽度 = width ( content + padding + border ) + margin")]),t._v(" "),a("h2",{attrs:{id:"_3-bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-bfc"}},[t._v("#")]),t._v(" 3. BFC")]),t._v(" "),a("p",[a("code",[t._v("是什么")]),t._v("：块级格式化上下文，指的是：一个独立渲染的区域，让处于 BFC 内部的元素与外部的元素相互隔离，内外元素的定位不会相互影响。")]),t._v(" "),a("p",[a("code",[t._v("具体规则")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("是一个独立容器，内部元素不会影响外部元素")]),t._v(" "),a("li",[t._v("同一个 BFC 的两个盒子 margin 会发生合并，取较大值")]),t._v(" "),a("li",[t._v("计算 BFC 高度时，浮动元素参与计算")])]),t._v(" "),a("p",[a("code",[t._v("怎么开启")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("设置 overflow：非 visible")]),t._v(" "),a("li",[t._v("设置 float：非 none")]),t._v(" "),a("li",[t._v("设置 "),a("strong",[t._v("position")]),t._v(": absolute | fiexed")]),t._v(" "),a("li",[t._v("设置 display：inline-block、flex、grid、table-cell （ 非 none 非 inline 非 block）")])]),t._v(" "),a("p",[a("code",[t._v("具体使用")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("防止 margin 重叠")]),t._v(" "),a("li",[t._v("清除浮动，防止父元素高度塌陷")]),t._v(" "),a("li",[t._v("给标准流元素开启 BFC ，防止被浮动元素覆盖")])]),t._v(" "),a("h2",{attrs:{id:"_4-选择器优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-选择器优先级"}},[t._v("#")]),t._v(" 4. 选择器优先级")]),t._v(" "),a("p",[a("code",[t._v("!important")]),t._v(" > "),a("code",[t._v("行内样式")]),t._v(" > "),a("code",[t._v("#id")]),t._v(" > "),a("code",[t._v(".class")]),t._v(" > "),a("code",[t._v("tag")]),t._v(" > "),a("code",[t._v("*")]),t._v(" > "),a("code",[t._v("继承")]),t._v(" > "),a("code",[t._v("默认")])]),t._v(" "),a("ul",[a("li",[t._v("选择器不建议多层次嵌套，"),a("code",[t._v("从右往左")]),t._v("解析")])]),t._v(" "),a("h2",{attrs:{id:"_5-css-预处理器-sass-less-stylus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-css-预处理器-sass-less-stylus"}},[t._v("#")]),t._v(" 5. CSS 预处理器(Sass/Less/Stylus)")]),t._v(" "),a("p",[t._v("CSS 预处理器是一种工具，通过添加类似于编程语言的语法来对 CSS 进行了增强和扩展。")]),t._v(" "),a("p",[t._v("它们提供了变量、嵌套规则、混合、函数等功能，提高样式的复用和可维护性。")]),t._v(" "),a("p",[t._v("一些常见的 CSS 预处理器包括 Sass、Less 和 Stylus。")]),t._v(" "),a("p",[t._v("它们将预处理器代码编译成普通的 CSS 文件供网页使用。")]),t._v(" "),a("h2",{attrs:{id:"_6-flex-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-flex-布局"}},[t._v("#")]),t._v(" 6. flex 布局")]),t._v(" "),a("h3",{attrs:{id:"_6-1-父级属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-父级属性"}},[t._v("#")]),t._v(" 6.1 父级属性")]),t._v(" "),a("ul",[a("li",[t._v("flex-direction")]),t._v(" "),a("li",[t._v("flex-wrap")]),t._v(" "),a("li",[t._v("flex-flow")]),t._v(" "),a("li",[t._v("justify-content")]),t._v(" "),a("li",[t._v("align-items")]),t._v(" "),a("li",[t._v("align-content")])]),t._v(" "),a("h3",{attrs:{id:"_6-2-子级属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-子级属性"}},[t._v("#")]),t._v(" 6.2 子级属性")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("order")])]),t._v(" "),a("li",[a("code",[t._v("flex-grow")])]),t._v(" "),a("li",[a("code",[t._v("flex-shrink")])]),t._v(" "),a("li",[a("code",[t._v("flex-basis")])]),t._v(" "),a("li",[a("code",[t._v("flex")])]),t._v(" "),a("li",[a("code",[t._v("align-self")])])]),t._v(" "),a("h2",{attrs:{id:"_7-两栏布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-两栏布局"}},[t._v("#")]),t._v(" 7. 两栏布局")]),t._v(" "),a("ul",[a("li",[t._v("flex")]),t._v(" "),a("li",[t._v("float")])]),t._v(" "),a("h2",{attrs:{id:"_8-隐藏元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-隐藏元素"}},[t._v("#")]),t._v(" 8. 隐藏元素")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("display: none")]),t._v(" 不占位。不会响应 DOM 事件。")]),t._v(" "),a("li",[a("code",[t._v("opacity: 0")]),t._v(" 占位，但不可见。会响应 DOM 事件。")]),t._v(" "),a("li",[a("code",[t._v("visibility: hidden")]),t._v(" 占位，但不可见。不会响应 DOM 事件。")]),t._v(" "),a("li",[a("code",[t._v("position: absolute; left: -10000px")]),t._v(" 移动到屏幕外")]),t._v(" "),a("li",[a("code",[t._v("z-index: -1")]),t._v(" 将别的定位元素遮盖掉当前元素")])]),t._v(" "),a("h2",{attrs:{id:"_9-水平居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-水平居中"}},[t._v("#")]),t._v(" 9. 水平居中")]),t._v(" "),a("ol",[a("li",[t._v("flex")]),t._v(" "),a("li",[t._v("absolute + transform: translate")]),t._v(" "),a("li",[t._v("absolute + margin 缺点: margin 负值要手动计算")]),t._v(" "),a("li",[t._v("absolute + margin:auto")]),t._v(" "),a("li",[t._v("grid 布局 兼容性差")]),t._v(" "),a("li",[t._v("table 布局（不考虑）")])])])}),[],!1,null,null,null);a.default=v.exports}}]);