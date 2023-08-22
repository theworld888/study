module.exports = {
  title: '精讲',
  description: '欢迎',
  theme: '@vuepress/theme-vue',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "HTML+CSS", link: "/html+css/" },
      { text: "JavaScript", link: "/javascript/" },
      { text: "服务端", link: "/server/" },
      { text: "工程化", link: "/engineering/" },
      { text: "Vue", link: "/vue/" },
    ],
    search: false,
    sidebar: 'auto'
  },

}