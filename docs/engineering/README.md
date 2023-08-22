# 1. 谈谈 bable

`是什么`：JavaScript编译器，将ES6+的语法转化为浏览器兼容性高的低版本 JavaScript

`配置方式`：

1. `babel.config.*`
2. `.babelrc.*`
3. `package.json` 中 `babel`

`配置`：

```js
{
  "presets": [...],	// 预设包
  "plugins": [...]  // babel 的插件
}
```

- `preset`: 预设包实际上就是一些插件组成的集合，因为插件数量很多，为了方便开发者使用，官方预设了一些常用的插件，使得可以处理一些 `ES6+` 的一些简单语法，但是比较复杂的语法，就无法使用基础的插件来转化

> core-js: 补丁和按需加载





# 2. 讲讲 ESLint

`概念`：是一个代码审查和修复的工具，其核心是通过配置一个个规则来限制代码的合法性和风格

`配置方式`：

- `eslintrc.*`: `eslintrc.js` `eslintrc.json` 等
- `package.json` 中 `eslintConfig`
- `eslint.config.js`

## 2.1 配置





# 3. Git Flow

`概念`：Git Flow 就是一套标准化的 Git 开发流程

## 3.1 git 分支

- master：长期分支，一般用于管理对外发布版本，每个 `commit`对应一个发布版本
- develop：长期分支，一般用于日常开发的汇总，即开发版本代码
- feature：短期分支，功能分支
- hotfix：短期分支，一般用于修复正式版出现的 bug
- release：短期分支，一般用于正式版本发布之前（即合并到 master 分支之前），对预发布版本进行测试



## 3.2 提交注释 commit 规范

```js
// 功能分支
git commit -m "feat: xxxxxx"

// 修复 bug
git commit -m "fix: 新增用户出现NPE"

// 优化已有功能
git commit -m "imp: 用户管理密码加密存储"

// 重构功能
git commit -m "refactor:用户管理"

1. test：添加测试

2. docs：撰写文档（documentation）

3. style： 调整格式（不影响代码运行的变动）

4. build：修改构建相关内容，如npm、maven内容。

5. ci：修改持续集成相关内容(Continues Intergration)
```



## 3.3 其他规范

1. 规范一

   - 一次 `COMMIT` 只做一件事

2. 规范二

   - ------------------------------------------------------------------------

3. 规范三

   - master 为稳定分支，进入此分支的代码都需要 review
   - develop 分支为即将发布的开发版本，一旦开发完成，转到 release 分支进行最后的完善和 bug 修复

4. 规范四

   - `hotfix`和 `feature`分支开发完成后需要 `merge`到 `develop`分支，都需要在GitLab提交 `Merge Request`进行`Code Review`
   - release 分支，需 merge 到 master 分支时，也需在 Gitlab 中提交 Merge Requst，进行 Code Review
   - 首先由各组组长Code Review，再由负责人Code Review。



# 4. 谈谈 Webpack

`概念`：静态模块打包工具，可以将静态模块编译、打包和输出成一个或多个文件（bundles）。

## 4.1  5个核心概念

- **入口(entry)**: 指示 webpack 从哪个文件开始打包。
- **输出(output)**: 指定打包后将文件输出到哪里去。
- **加载器(loader)**: webpack 默认只能识别 js、json 文件，其他类型的文件需要通过 loader 转化成有效模块才能识别。
- **插件(plugin)**: 相对 loader，plugin 可以做范围更广的工作，比如：打包优化，资源管理，注入环境变量。
- **模式(mode)**: 可以选择 development, production 或 none 之中的一个。不同模式会加载不同的配置。



## 4.2 常见 Loader

1. 处理样式资源

- `style-loader` 动态创建一个 Style 标签，里面放置 Webpack 中 CSS 模块内容
- `css-loader` 负责将 CSS 文件编译成 Webpack 能识别的模块
- `less-loader` 将 Less 文件编译成 CSS 文件
- `sass-loader` 将 Sass 文件编译成 CSS 文件
- `stylus-loader` 将 Stylus 文件编译成 CSS 文件
- `postcss-loader` 根据要求增加 CSS 的前缀(css 代码兼容性处理)

2. 处理 js 资源

- `babel-loader` 将 ES6 转化为 ES5(js 代码兼容性处理)
- `eslint-loader` 过去用来进行 js 代码语法检查，最新 Webpack5 改用插件实现：eslint-webpack-plugin

3. 加载其他资源

- `file-loader` 过去用来转化图片、字体图标等资源，现在 Webpack5 内置了
- `url-loader` 过去用来转化图片等资源，现在 Webpack5 内置了
- `vue-loader` 用来编译 Vue 单文件组件



## 4.3 常见的 Plugin

1. `html-webpack-plugin` 简化创建 HTML 文件
2. `eslint-webpack-plugin` 用来进行 js 代码语法检查
3. `terser-webpack-plugin` 压缩 js 代码
4. `mini-css-extract-plugin` 提取 CSS 成单独文件
5. `css-minimizer-webpack-plugin` 压缩 CSS 代码





# 5. 谈谈Webpack 优化

## 1. 提升开发体验

- 使用 `Source Map` 让开发或上线时代码报错能有更加准确的错误提示。
- 在生产阶段我们可以配置不生成map文件减小打包的体积

## 2. 提升 webpack 提升打包构建速度

- 使用 `HotModuleReplacement` 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。
- 使用 `OneOf` 让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。
- 使用 `Include/Exclude` 排除或只检测某些文件，处理的文件更少，速度更快。
- 使用 `Cache` 对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。
- 使用 `Thead` 多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）

## 3. 减少代码体积

- 使用 `Tree Shaking` 剔除了没有使用的多余代码，让代码体积更小。
- 使用 `@babel/plugin-transform-runtime` 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。
- 使用 `Image Minimizer` 对项目中图片进行压缩，体积更小，请求速度更快。（需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。）

## 4. 优化代码运行性能

- 使用 `Code Split` 对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。
- 使用 `Preload / Prefetch` 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。
- 使用 `Network Cache` 能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。
- 使用 `Core-js` 对 js 进行兼容性处理，让我们代码能运行在低版本浏览器。
- 使用 `PWA` 能让代码离线也能访问，从而提升用户体验。







# 6. Vite和 Webpack 的区别

1. 底层语言不同

从底层原理上来说，Vite是基于esbuild预构建依赖。而esbuild是采用go语言编写，因为go语言的操作是纳秒级别。而js是以毫秒计数，所以vite比用js编写的打包器快10-100倍。

2. 启动方式不同

webpack: 分析依赖=> 编译打包=> 交给本地服务器进行渲染。首先分析各个模块之间的依赖，然后进行打包。这样的坏处就是随着模块的增多，需要处理的依赖关系，需要打包的模块越来越多，造成热更新越来越慢

vite: 启动服务器=> 请求模块时按需动态编译显示。vite采用了一种懒加载的方式，它在启动的时候不需要打包，所以不用分析模块与模块之间的依赖关系，不用进行编译；当浏览器请求某个模块时，再根据需要对模块内容进行编译这样做的好处就是按需动态编译可以缩减编译时间，当项目越复杂，模块越多的情况下，vite明显优于webpack.

3. 缺点比较

- vite生态不及webpack，加载器、插件不够丰富
- 打包到生产环境时，vite使用传统的rollup进行打包，生产环境esbuild构建对于css和代码分割不够友好。所以，vite的优势是体现在开发阶段
- vite首屏性能不及webpack
  -  Webpack：浏览器发起请求，服务端将已经打包构建好的首屏内容发送给浏览器。整个过程非常普遍，没有什么可说的，不存在什么性能问题
  -  Vite在首屏方面的表现就有些差了。由于 unbundle 机制，首屏期间需要额外做以下工作:
     - 不对源文件做合并捆绑操作，导致大量的 http 请求；
     - dev server 运行期间对源文件做 resolve、load、transform、parse 操作；
     - 预构建、二次预构建操作也会阻塞首屏请求，直到预构建完成为止





# webpack流程

1. html-webpack-plugin：打包js和HTML模板

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash:8].js',
    },
    mode: "production",
    plugins: [new HtmlWebpackPlugin({
        template: "./index.html"
    })],
}
```

2. 打包css

`导入样式时可以使用 CommonJS也可以使用 ES6`

```js
// require('../styles/index.css')
import "../styles/index.css"
console.log('打包');

// 配置打包 css
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}
```



3. 

















































