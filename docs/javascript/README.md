---
sidebar: auto
---
## 1. 讲讲数据类型

1. 基本数据类型
   - 原本类型
     - number、string、boolean、null、undefined
   - ES6+
     - symbol、bigint
2. 引用数据类型
   - 原始值包装类型
   - Object、Array、Function、Date、Math、RegExp...



## 2. 数据类型判断

### 2.1 `typeof`

`不能判断 null 、除了 function 的对象`

```js
// 其他的可以正常判断，
typeof null // 'object'
typeof {} // 'object'
typeof [] // 'object'
typeof function () {}; // 'function'
```

### 2. 2`instanceof`

`用来判断复杂数据类型，故也不能判断 null,可以判断复杂数据类型` 

```js
({}) instanceof Object; // true
([]) instanceof Object; // true
null instanceof Object; // false
([]) instanceof Array; // true
({}) instanceof Array; // false
```

### 2.3 全等 === 

`补充不能判断 null 类型`

```js
null === null
```

### 2.4 Array.isArray()

判断是不是数组类型

### 2.5 Object.prototype.toString.call(obj).slice(8, -1)

可以判断所有类型

```js
Object.prototype.toString.call(123).slice(8, -1); // 'Number'
Object.prototype.toString.call("123").slice(8, -1); // 'String'
Object.prototype.toString.call(null).slice(8, -1); // 'Null'
Object.prototype.toString.call(undefined).slice(8, -1); // 'Undefined'
Object.prototype.toString.call(Symbol()).slice(8, -1); // 'Symbol'
Object.prototype.toString.call(123n).slice(8, -1); // 'BigInt'
Object.prototype.toString.call(true).slice(8, -1); // 'Boolean'
Object.prototype.toString.call({}).slice(8, -1); // 'Object'
Object.prototype.toString.call(function () {}).slice(8, -1); // 'Function'
Object.prototype.toString.call([]).slice(8, -1); // 'Array'
Object.prototype.toString.call(new Date()).slice(8, -1); // 'Date'
Object.prototype.toString.call(new RegExp()).slice(8, -1); // 'RegExp'
```



## 3. 数组的方法

### 3.1 更新数组的方法【7】

`pop、push、shift、unshift、splice、sort、reverse`

### 3.2 遍历数组的方法【8】

`forEach、map、filter、reduce、find、findIndex、every、some`

### 3.3 其他方法【5】

`concat、join、includes、indexOf、slice`



## 4. DOM 操作

### 4.1 添加DOM

```js
let div = document.createElement('div')
fa.appendChild(div)
```

### 4.2 删除 DOM

```js
let div = document.getElementById('div')
fa.removeChild(div)
```

### 4.3 修改 DOM

```
son.innerHTML = '修改DOM'
```

### 4.4 查询 DOM

```
document.querySelector('.son')
```



## 5. 作用域、作用域链、执行上下文

### 5.1 作用域

`是什么`：

1. 是变量起作用的区域，规定了变量可以在哪些地方访问和使用，
2. 他分为三个类型，全局作用域，局部作用域，块级作用域。
3. 全局作用域的变量可以在整个程序中使用，局部作用域的变量只能在特定区域使用，比如函数内部。
4. 在一个作用域中创建的变量，只能在本作用域和其子作用域才能访问和使用

`作用`：将变量进行隔离，防止发生变量污染

`块级作用域`：非函数的大括号包裹的区域，let 和 const 创建的变量在此块级作用域中起作用。

### 5.2 作用域链

`是什么`：

1. 是由多个嵌套作用域组成的链式结构，为我们提供了一种变量的查询机制
2. 当访问一个作用域的变量时，如果这个作用域没有这个变量，会按照作用域链的顺序。由内到外逐级查找，直到找到变量或者到达全局作用域，若不存在就报错。

`注意`：	

1. 作用域是虚拟的，代码写完或者函数定义完成就存在
2. 作用域链是真实存在的，是函数调用的时候才形成



### 5.3 执行上下文

`是什么`：

1. 又叫执行上下文环境，程序执行过程必须依赖的环境
2. `全局执行上下文`  `函数执行上下文`  `eval`
3. 当程序执行时，且代码执行前创建全局执行上下文环境。函数调用后，函数内部代码执行前，创建函数执行上下文环境
4. 创建阶段和执行阶段
   - 创建阶段
     1. 收集变量形成变量对象
     2. 确定此执行上下文的this指向
     3. 确定执行上下文的作用域链
   - 执行阶段
     1. 对变量进行访问或者赋值

`注意`：函数执行上下文创建时还会先，收集传递参数，形成 arguments，再去收集变量。







------



## 6. 讲讲对闭包的理解

`是什么`：

- 闭包是函数嵌套时，内部函数引用外部函数局部变量引用关系
- 通过 chrome 的 debugger 调试工具得知，这个引用关系实际上是一个对象，但是我们无法直接操作这个对象，只能借助于 调试工具查看

`产生条件`：

1. 函数嵌套
2. 内部函数引用外部函数的局部变量
3. 调用外部函数（内部函数被被定义）

> 闭包不是在调用内部函数时产生，而是在创建内部函数对象时产生的（定义函数的时候）

`作用`：

- 延长局部变量的生命周期
- 让函数外部能间接操作内部的局部变量

`闭包的声生命周期`：

- 产生闭包：内部函数被创建的时候就产生了闭包
  - 临时闭包：函数在调用完成后就会被销毁，闭包也会随之销毁
  - 永久闭包：将内部函数的引用保留起来，使其不会被垃圾回收机制销毁
- 使用闭包：执行内部函数的时候
- 释放闭包：让内部函数转变为垃圾对象，断开他的所有引用

`应用`：

- Vue2 响应式原理中的 dep 对象以闭包的形式保管在 get/set函数中



## 7.  谈谈 this 指向

当函数被创建时，他的this指向并不确定，而是要看他是以何种方式来调用决定的

### 7.1 常规情况

1. 默认绑定
   - 直接调用 fn()
   - 严格模式 指向 undefined，非严格模式指向 window
2. 隐式绑定
   - 通过对象调用函数 obj.fn()
   - 指向调用函数的对象
3. 显示绑定
   - 通过 call/apply/bind 方法调用函数 fn.call/apply/bind(obj)
   - 指向传入的第一个参数对象 obj
4. 构造函数绑定
   - 通过 new 调用函数 new fn()
   - 指向 new 出来的实例对象

### 7.2 特殊情况

- 箭头函数
  - 箭头函数没有自己的 this
  - 其 this 指向外部作用域的 this
- 回调函数
  - 定时器/ajax/promise/数组遍历相关方法回调 ==> this 默认是 window，严格模式是 undefined
  - DOM 事件监听回调 ==> 绑定事件的 DOM 元素
  - vue 控制的回调函数(生命周期/methods/watch/computed) ==> this 是组件的实例（内部所有方法都使用 bind 方法绑定成组件实例）



## 8. 原型、原型链

`原型对象`：

- 对象分为函数对象和非函数对象，函数对象有prototype属性，也被称为显式原型属性，该属性指向的对象就是此函数的原型对象
- 每个原型对象都有一个`constructor`方法，指向其构造函数，还有一个`__proto__`属性，被称为隐式原型属性，指向原型对象

`特殊情况`：

> Function.prototype === Function.\__proto__
>
> Object.prototype.\__proto__ === null

`原型链`：

- 概念：由`__proto__`链接的原型对象所组成的链式结构，被称为原型链

- 作用：他的作用是用来查找对象的属性
- 规则：在查找对象的属性或者调用对象的方法时，会现在这个对象中查找，如果没有，就会沿着原型链查找，知道找到或者到达Object.prototype.\__proto__，找不到返回 undefined
- 应用：
  - 全局事件总线
  - 将接口汇总到 vm 供组件使用

## 9. 垃圾回收机制

`是什么`：

- 浏览器中有一个专门的线程，每隔很短的时间就会运行一次
- 扫描内存，判断一个对象是不是垃圾对象，如果是，清除其内存数据，将这块内存标记为空闲状态

`实现机制`：

1. 引用计数法
   - 流程：为每个对象添加一个计数器，如果由引用指向该对象，将计数器+1，清除一个引用时，计数器-1，当计数器归零时，将这个对象回收。
   - 缺点：
     - 需要计数器，占用空间大
     - 无法处理循环引用的情况，会导致内存无法回收，造成内存泄漏
2. 标记清除法
   - 流程：在标记阶段为每个对象添加标记，清除阶段将没有标记的对象销毁
   - 缺点：
     - 内存碎片化：空闲内存块不连续，容易出现很多空闲的内存块
     - 分配速度慢：最坏情况是每次都要遍历到最后，同时因为碎片化，大对象的分配效率会更慢
   - 解决办法：使用 `标记整理算法`，标记结束后，这个算法会将活着的对象向内存的一端移动，最后清理掉边界的内存

## 10. 事件循环

`概念`：JavaScript 是一个单线程语言，要实现异步任务的执行，就需要借助于事件循环机制

- 所有的任务都在主线程中执行，形成一个执行栈
- 执行栈之外还有用来存储待执行异步回调的任务队列

`顺序`：

1. 执行初始化同步代码
2. 执行过程中与遇到异步任务，将这个异步任务托管给其他线程的管理模块，当满足某些条件的时候，管理模块会将异步任务的回调函数，放入待执行队列中
3. 当执行栈中的代码执行完毕之后，会将待执行队列中的回调依次取出到执行栈中执行

> 3. 队列分为宏任务和微任务
> 4. 执行栈中的同步代码执行结束后，执行微任务队列的所有微任务
> 5. 之后再次取出宏任务队列的回调函数到执行栈中执行

## 11. web Worker

`概念`：是 HTML5 新特性，允许我们可以在主线程之外开辟额外的线程，将 js 代码在这个线程中执行，使得获得操作多线程的能力  

`使用`：

1. 创建 woker

```js
const worker = new Worker(path, options);
```

2. 主线程和 worker 线程数据传递

```js
// 接收 worker 的线程消息
worker.addEventListener('message', e => {
  console.log(e.data);
});

// 向 worker 发送信息
worker.postMessage('hello，worker');
```

3. worker 线程引用其他线程的 js 文件

- 方式一

```js
// 此方法不需要向外暴露对象
importScripts('./utils.js');
```

- 方式二

```js
// 创建一个支持 ES6 语法的 worker 线程
const myWorker = new Worker('./xxxWorker.js', { type: 'module' }); 
// 之后的 worker 线程就可以使用 ES6 的引用文件方式
import { add } from './utils.js';
```



## 12.  ES6

### 12.1 简单语法

1. const 和 let
   - 不能重复定义
   - 块级作用域
   - 没有变量提升
   - 不会成为 window 的属性
2. 解构赋值
3. 形参默认值
4. 扩展运算符
5. 模板语法
6. 对象属性与方法简写
7. 模块化语法
8. ......

### 12.2 复杂语法

1. 箭头函数（this指向）
2. class 和 extends（原型和继承）
3. promise / generator / async & await（引申 js 事件循环机制）
4. Proxy（引申 vue2 和 vue3 响应式原理）
5. Map / Set / WeakMap / WeakSet (引申 vue3 响应式原理)
6. .......



## 13. Promise

> 扩展：讲讲 await/async
>
> 1. 使用同步代码实现异步效果
> 2. 完全的消灭回调

`概念`：

1. 异步代码更好的解决方案，用于解决回调地狱的问题
2. 在遇到promise之前，异步仍然是要用的，但是那会使用的都是纯回调函数来处理异步操作的 
3. 纯回调函数处理异步有缺点：就是指定回调的时机，是固定的，不够灵活，所以一旦形成回调地狱 那么，就没办法，回调地狱只是代码的可读性很差，不代表有错，但是给人的体验不好
4. 指定回调的时机非常灵活 可以在请求前 请求后(结果回来之后)，就是因为这个特点 所以可以完美的去解决回调地狱的可读性问题

`特性`：三种状态，状态不可逆

改变状态：

实例方法：

静态方法：

`应用`：

- 发送axios请求
- 发送多个请求时，可以使用 Promise.all() 来处理



## 14. 模块化

### 14.1 commonjs 模块化语法

- 主要用于 NodeJs 端
- 语法：
  - 引入：require
  - 暴露：exports / module.exports

### 14.2 ES6 模块化

1. 默认暴露
2. 分别暴露
3. 统一暴露
4. 引入并暴露





## 15. 箭头函数

1. 代码简洁
2. 没有 this，使用外部上下文的this，不能通过 bind 绑定 this
3. 不能通过 new 的方式来创建实例
4. 没有 arguments ，但是可以通过 rest 剩余参数代替



## 16. 深拷贝和浅拷贝

### 16.1 浅拷贝

1. object.assign()
2. 扩展运算符
3. Array.prototype.slice()
4. Array.prototype.concat()

### 16.2 深拷贝

1. JSON.parse(JSON.stringify())
2. 自定义深度克隆
3. lodash 的 cloneDeep

## 17. TypeScript





> vite 配置 css预处理器，day1录播



