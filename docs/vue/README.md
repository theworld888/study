# 1. Vue 相关 API

## 1.1 全局配置

- Vue.config 对象的属性
- Vue.config.productionTip = false
  - 关闭生产提示

## 1.2 全局 API

- 注册组件
  - Vue.component('组件名'，组件)
  - Vue.component(组件.name，组件)
- Vue.directive()：自定义指令
  - 对象插件：对象内部有一个 install 方法
  - 函数插件：

```js
// 对象式插件
MyPlugin.install = function (Vue, options) {}
MyPlugin = {
    install(Vue, options) {}
}
/// 函数式插件
function MyPlugin(Vue, options){}
```

- Vue.filter()：过滤器
- Vue.use()：使用插件
  - 用来使用插件
  - `对象式插件`本质是调用install方法，`函数式插件`直接调用这个函数
- Vue.nextTick(callback)
- Vue.set() // this.$set
  - Vue2中的底层使用 Object.defineProperty 实现响应式，created时已经实现数据劫持和代理
  - 后期为对象添加属性，并不会被数据劫持和代理，所以也不会引发页面重新加载
  - 官方提供两个api，一个用于后期添加响应式属性，一个用来删除响应式属性，并保证页面更新

- Vue.delete()//this.$delete



## 1.3 配置选项（组件）

- 数据
  - `data`、`props`、`methods`、`computed`、`watch`
- DOM
  - el：挂载点
  - template：模板
  - render：渲染函数

> render函数作用：生成虚拟 dom，将模板转化为虚拟 dom

- 生命周期
  - beforeCreate：此时`data`和`methods`还未初始化
  - created：实例的`data`和`methods`已经完成劫持和代理，可以发起`Ajax`请求
  - beforeMount：虚拟DOM已经生成
  - mounted：完成虚拟DOM将真实DOM的替换，在替换之前页面显示未经编译的DOM
  - beforeUpdate：数据已经更新，视图并未更新
  - updated：视图与数据相同步
  - beforeDestory：销毁前，此时可以进行收尾工作（清除定时器、事件解绑、关闭定时器...）
  - destoryed：完成销毁，实例已经无法正常使用了
  - activated：组件激活
  - deactivated：组件失活
  - errorCaptured：用于捕获子组件的错误
- 资源
  - directives：局部指令
  - filters：局部过滤器
  - components：局部组件
- 杂项
  - mixin：局部混入
  - provide / inject：
- 其他
  - name：组件名
  - functional：标识为函数式组件

## 1.4 实例属性（vm实例）

- $el：挂载点
- $parent：父组件
- $children：子组件
- $refs：获取组件实例或者真实DOM
- $attrs：父组件传递给子组件，除了`props`和样式相关的属性组成的对象
- $listeners：父组件传递给子组件的事件组成的数组



## 1.5 实例方法（vm实例）

- 数据
  - $watch()：等价于配置项watch
  - $set()：等价于  Vue.set()
  - $delete()：等价于 Vue.delete
- 事件
  - $on：绑定自定义事件
  - $once：绑定的自定义事件只能执行一次
  - $off：解绑自定义事件
  - $emit：触发自定义事件
- 生命周期
  - $nextTick()：等价于Vue.nextTick()
  - $mount：挂载点，类似于 $el
  - $destroy：调用vm.$destory组件就会进入销毁阶段




## 1.6 全局指令

1. v-text
2. v-html
3. v-show
4. v-if
5. v-for
6. v-on
7. v-bind
8. v-model
9. v-slot
10. 其他
    1. v-pre
    2. v-once
    3. v-cloak



## 1.7 特殊属性

- key：虚拟dom对比（deffing算法）的唯一标识 
- ref：ref 标记
- is：切换动态组件



## 1.8 内置组件

- component：动态组件
  - 使用is="组件名"，切换组件
  - 切换时会触发，destoryed，所以可以被缓存
- transition
  1. 为需要过渡的元素外套一层 transition
  2. 添加 name，此name 用来指定 过渡类名前缀
  3. 为这些类名添加 css 样式属性
- keep-alive：缓存组件
- slot
  - 默认插槽
  - 具名插槽
  - 作用域插槽




# 2. 组件深入

## 2.1 动态组件

\<component is="xxx">



## 2.2 缓存组件

\<keep-alive>



## 2.3 异步组件

# import

1. 静态引入：
   - 必须写在最顶端，用不用都必须提前引入
   - 这样引入的文件会在打包时，打包进主文件
2. 动态引入：import（）
   - 异步引入，可以在任何地方引入
   - webpack在遇到import()时，会单独打包为小文件
   - 通过import()，导入 的组件被称为异步组件
   - 其返回值时一个promise，promise的值是模块暴露的对象

## 2.4 函数式组件

> 若一个组件只用于展示数据，所有动态数据都从父组件传递进来（只有props），内部没有逻辑交互（无methods方法、也没有mounted等任何生命周期处理函数），没有状态修改(无data)，则推荐使用函数式组件来提升vue的性能

```vue
<template functional>
    <ul>
        <li v-for="(item,index) in props.items" :key="index" @click="props.itemClick(item)" >
            {{item}}
        </li>
    </ul>
</template>


```



## 2.5 递归组件

- 内部调用自己
- 必须拥有name，递归时使用此name表示组件

