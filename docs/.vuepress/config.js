module.exports = {
    title: 'xdj-blog',
    description: 'Just playing around',
    dest: './myblog',
    base: '/myblog/',

    locales: {
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            {
                text: '编程语言',
                link: '/pages/',
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
                title: 'ECMAScript 5', // 必要的
                path: '/pages/Es5/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: ['/pages/Es5/01.md']
            },
            {
                title: 'ECMAScript 6', // 必要的
                path: '/pages/Es6/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/pages/Es6/01.md',
                    '/pages/Es6/02.md',
                    '/pages/Es6/03.md',
                    '/pages/Es6/04.md'
                ]
            },
            {
                title: 'typescript', // 必要的
                path: '/pages/Ts/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/pages/Ts/01.md',
                    '/pages/Ts/02.md',
                    '/pages/Ts/03.md',
                    '/pages/Ts/04.md',
                    '/pages/Ts/05.md',
                    '/pages/Ts/06.md',
                    '/pages/Ts/07.md',
                    '/pages/Ts/08.md',
                    '/pages/Ts/09.md',
                    '/pages/Ts/10.md'
                ]
            }
        ]
    }
};
