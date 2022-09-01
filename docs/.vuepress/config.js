module.exports = {
    title: 'xdj-blog',
    description: 'Just playing around',
    dest: './myblog',
    base: '/myblog/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '编程语言',
                link: '/Js/',
                items: [
                    { text: 'ES5', link: '/pages/Es5/' },
                    { text: 'ES6', link: '/pages/Es6/' },
                    { text: 'Ts', link: '/pages/Ts/' }
                ]
            },
            { text: 'Github', link: 'git@github.com:IGunKe/myblog-source.git' }
        ],
        sidebar: [
            {
                title: 'Group 1', // 必要的
                path: '/pages/Es5/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: ['/']
            }
        ]
    }
};
