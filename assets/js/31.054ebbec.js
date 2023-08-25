(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(t,a,s){"use strict";s.r(a);var v=s(14),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-基础"}},[t._v("#")]),t._v(" Vue 基础")]),t._v(" "),a("h2",{attrs:{id:"_1-vue-相关-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-相关-api"}},[t._v("#")]),t._v(" 1. Vue 相关 API")]),t._v(" "),a("h3",{attrs:{id:"_1-1-全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-全局配置"}},[t._v("#")]),t._v(" 1.1 全局配置")]),t._v(" "),a("ul",[a("li",[t._v("Vue.config 对象的属性")]),t._v(" "),a("li",[t._v("Vue.config.productionTip = false\n"),a("ul",[a("li",[t._v("关闭生产提示")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-全局-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-全局-api"}},[t._v("#")]),t._v(" 1.2 全局 API")]),t._v(" "),a("ul",[a("li",[t._v("注册组件\n"),a("ul",[a("li",[t._v("Vue.component('组件名'，组件)")]),t._v(" "),a("li",[t._v("Vue.component(组件.name，组件)")])])]),t._v(" "),a("li",[t._v("Vue.directive()：自定义指令\n"),a("ul",[a("li",[t._v("对象插件：对象内部有一个 install 方法")]),t._v(" "),a("li",[t._v("函数插件：")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象式插件")]),t._v("\nMyPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMyPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// 函数式插件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("Vue.filter()：过滤器")])]),t._v(" "),a("li",[a("p",[t._v("Vue.use()：使用插件")]),t._v(" "),a("ul",[a("li",[t._v("用来使用插件")]),t._v(" "),a("li",[a("code",[t._v("对象式插件")]),t._v("本质是调用 install 方法，"),a("code",[t._v("函数式插件")]),t._v("直接调用这个函数")])])]),t._v(" "),a("li",[a("p",[t._v("Vue.nextTick(callback)")])]),t._v(" "),a("li",[a("p",[t._v("Vue.set() // this.$set")]),t._v(" "),a("ul",[a("li",[t._v("Vue2 中的底层使用 Object.defineProperty 实现响应式，created 时已经实现数据劫持和代理")]),t._v(" "),a("li",[t._v("后期为对象添加属性，并不会被数据劫持和代理，所以也不会引发页面重新加载")]),t._v(" "),a("li",[t._v("官方提供两个 api，一个用于后期添加响应式属性，一个用来删除响应式属性，并保证页面更新")])])]),t._v(" "),a("li",[a("p",[t._v("Vue.delete()//this.$delete")])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-配置选项-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-配置选项-组件"}},[t._v("#")]),t._v(" 1.3 配置选项（组件）")]),t._v(" "),a("ul",[a("li",[t._v("数据\n"),a("ul",[a("li",[a("code",[t._v("data")]),t._v("、"),a("code",[t._v("props")]),t._v("、"),a("code",[t._v("methods")]),t._v("、"),a("code",[t._v("computed")]),t._v("、"),a("code",[t._v("watch")])])])]),t._v(" "),a("li",[t._v("DOM\n"),a("ul",[a("li",[t._v("el：挂载点")]),t._v(" "),a("li",[t._v("template：模板")]),t._v(" "),a("li",[t._v("render：渲染函数")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("render 函数作用：生成虚拟 dom，将模板转化为虚拟 dom")])]),t._v(" "),a("ul",[a("li",[t._v("生命周期\n"),a("ul",[a("li",[t._v("beforeCreate：此时"),a("code",[t._v("data")]),t._v("和"),a("code",[t._v("methods")]),t._v("还未初始化")]),t._v(" "),a("li",[t._v("created：实例的"),a("code",[t._v("data")]),t._v("和"),a("code",[t._v("methods")]),t._v("已经完成劫持和代理，可以发起"),a("code",[t._v("Ajax")]),t._v("请求")]),t._v(" "),a("li",[t._v("beforeMount：虚拟 DOM 已经生成")]),t._v(" "),a("li",[t._v("mounted：完成虚拟 DOM 将真实 DOM 的替换，在替换之前页面显示未经编译的 DOM")]),t._v(" "),a("li",[t._v("beforeUpdate：数据已经更新，视图并未更新")]),t._v(" "),a("li",[t._v("updated：视图与数据相同步")]),t._v(" "),a("li",[t._v("beforeDestory：销毁前，此时可以进行收尾工作（清除定时器、事件解绑、关闭定时器...）")]),t._v(" "),a("li",[t._v("destoryed：完成销毁，实例已经无法正常使用了")]),t._v(" "),a("li",[t._v("activated：组件激活")]),t._v(" "),a("li",[t._v("deactivated：组件失活")]),t._v(" "),a("li",[t._v("errorCaptured：用于捕获子组件的错误")])])]),t._v(" "),a("li",[t._v("资源\n"),a("ul",[a("li",[t._v("directives：局部指令")]),t._v(" "),a("li",[t._v("filters：局部过滤器")]),t._v(" "),a("li",[t._v("components：局部组件")])])]),t._v(" "),a("li",[t._v("杂项\n"),a("ul",[a("li",[t._v("mixin：局部混入")]),t._v(" "),a("li",[t._v("provide / inject：")])])]),t._v(" "),a("li",[t._v("其他\n"),a("ul",[a("li",[t._v("name：组件名")]),t._v(" "),a("li",[t._v("functional：标识为函数式组件")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-4-实例属性-vm-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-实例属性-vm-实例"}},[t._v("#")]),t._v(" 1.4 实例属性（vm 实例）")]),t._v(" "),a("ul",[a("li",[t._v("$el：挂载点")]),t._v(" "),a("li",[t._v("$parent：父组件")]),t._v(" "),a("li",[t._v("$children：子组件")]),t._v(" "),a("li",[t._v("$refs：获取组件实例或者真实 DOM")]),t._v(" "),a("li",[t._v("$attrs：父组件传递给子组件，除了"),a("code",[t._v("props")]),t._v("和样式相关的属性组成的对象")]),t._v(" "),a("li",[t._v("$listeners：父组件传递给子组件的事件组成的数组")])]),t._v(" "),a("h3",{attrs:{id:"_1-5-实例方法-vm-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-实例方法-vm-实例"}},[t._v("#")]),t._v(" 1.5 实例方法（vm 实例）")]),t._v(" "),a("ul",[a("li",[t._v("数据\n"),a("ul",[a("li",[t._v("$watch()：等价于配置项 watch")]),t._v(" "),a("li",[t._v("$set()：等价于 Vue.set()")]),t._v(" "),a("li",[t._v("$delete()：等价于 Vue.delete")])])]),t._v(" "),a("li",[t._v("事件\n"),a("ul",[a("li",[t._v("$on：绑定自定义事件")]),t._v(" "),a("li",[t._v("$once：绑定的自定义事件只能执行一次")]),t._v(" "),a("li",[t._v("$off：解绑自定义事件")]),t._v(" "),a("li",[t._v("$emit：触发自定义事件")])])]),t._v(" "),a("li",[t._v("生命周期\n"),a("ul",[a("li",[t._v("$nextTick()：等价于 Vue.nextTick()")]),t._v(" "),a("li",[t._v("$mount：挂载点，类似于 $el")]),t._v(" "),a("li",[t._v("$destroy：调用vm.$destory 组件就会进入销毁阶段")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-6-全局指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-全局指令"}},[t._v("#")]),t._v(" 1.6 全局指令")]),t._v(" "),a("ol",[a("li",[t._v("v-text")]),t._v(" "),a("li",[t._v("v-html")]),t._v(" "),a("li",[t._v("v-show")]),t._v(" "),a("li",[t._v("v-if")]),t._v(" "),a("li",[t._v("v-for")]),t._v(" "),a("li",[t._v("v-on")]),t._v(" "),a("li",[t._v("v-bind")]),t._v(" "),a("li",[t._v("v-model")]),t._v(" "),a("li",[t._v("v-slot")]),t._v(" "),a("li",[t._v("其他\n"),a("ol",[a("li",[t._v("v-pre")]),t._v(" "),a("li",[t._v("v-once")]),t._v(" "),a("li",[t._v("v-cloak")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-7-特殊属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-特殊属性"}},[t._v("#")]),t._v(" 1.7 特殊属性")]),t._v(" "),a("ul",[a("li",[t._v("key：虚拟 dom 对比（deffing 算法）的唯一标识")]),t._v(" "),a("li",[t._v("ref：ref 标记")]),t._v(" "),a("li",[t._v("is：切换动态组件")])]),t._v(" "),a("h3",{attrs:{id:"_1-8-内置组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-内置组件"}},[t._v("#")]),t._v(" 1.8 内置组件")]),t._v(" "),a("ul",[a("li",[t._v("component：动态组件\n"),a("ul",[a("li",[t._v('使用 is="组件名"，切换组件')]),t._v(" "),a("li",[t._v("切换时会触发，destoryed，所以可以被缓存")])])]),t._v(" "),a("li",[t._v("transition\n"),a("ol",[a("li",[t._v("为需要过渡的元素外套一层 transition")]),t._v(" "),a("li",[t._v("添加 name，此 name 用来指定 过渡类名前缀")]),t._v(" "),a("li",[t._v("为这些类名添加 css 样式属性")])])]),t._v(" "),a("li",[t._v("keep-alive：缓存组件")]),t._v(" "),a("li",[t._v("slot\n"),a("ul",[a("li",[t._v("默认插槽")]),t._v(" "),a("li",[t._v("具名插槽")]),t._v(" "),a("li",[t._v("作用域插槽")])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_2-组件深入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件深入"}},[t._v("#")]),t._v(" 2. 组件深入")]),t._v(" "),a("h3",{attrs:{id:"_2-1-动态组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-动态组件"}},[t._v("#")]),t._v(" 2.1 动态组件")]),t._v(" "),a("ul",[a("li",[t._v('通过<component is="xxx">动态展示组件，通过 is 属性指定要展示的组件')]),t._v(" "),a("li",[t._v("问题: 当从 A 组件切换到 B 组件时, A 组件就会销毁")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-缓存组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-缓存组件"}},[t._v("#")]),t._v(" 2.2 缓存组件")]),t._v(" "),a("ul",[a("li",[t._v("通过<keep-alive>可以对组件进行缓存")]),t._v(" "),a("li")]),t._v(" "),a("h3",{attrs:{id:"_2-3-异步组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-异步组件"}},[t._v("#")]),t._v(" 2.3 异步组件")]),t._v(" "),a("p",[a("code",[t._v("介绍")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 es6 的 import 语法，可以实现组件的异步加载，通过此方法加载的组件，在打包时会被打包为一个单独的文件")])]),t._v(" "),a("li",[a("p",[t._v("无论是路由组件还是普通组件，都可以被异步加载")])]),t._v(" "),a("li",[a("p",[t._v("可以提高页面首次加载的速度，快速展示要展示的组件，异步组件只有在需要的时候才会加载")])]),t._v(" "),a("li",[a("p",[t._v("import（）的返回值是一个 promise，其值为模块导出的对象")])])]),t._v(" "),a("h2",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" import")]),t._v(" "),a("ol",[a("li",[t._v("静态引入：\n"),a("ul",[a("li",[t._v("必须写在最顶端，用不用都必须提前引入")]),t._v(" "),a("li",[t._v("这样引入的文件会在打包时，打包进主文件")])])]),t._v(" "),a("li",[t._v("动态引入：import（）\n"),a("ul",[a("li",[t._v("异步引入，可以在任何地方引入")]),t._v(" "),a("li",[t._v("webpack 在遇到 import()时，会单独打包为小文件")]),t._v(" "),a("li",[t._v("通过 import()，导入 的组件被称为异步组件")]),t._v(" "),a("li",[t._v("其返回值时一个 promise，promise 的值是模块暴露的对象")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-4-函数式组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-函数式组件"}},[t._v("#")]),t._v(" 2.4 函数式组件")]),t._v(" "),a("blockquote",[a("p",[t._v("若一个组件只用于展示数据，所有动态数据都从父组件传递进来（只有 props），内部没有逻辑交互（无 methods 方法、也没有 mounted 等任何生命周期处理函数），没有状态修改(无 data)，则推荐使用函数式组件来提升 vue 的性能")])]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("functional")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item, index) in props.items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("props.itemClick(item)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            {{ item }}\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-5-递归组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-递归组件"}},[t._v("#")]),t._v(" 2.5 递归组件")]),t._v(" "),a("ul",[a("li",[t._v("内部调用自己")]),t._v(" "),a("li",[t._v("必须拥有 name，递归时使用此 name 表示组件")])])])}),[],!1,null,null,null);a.default=_.exports}}]);