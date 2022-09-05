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
		smoothScroll: true,
		lastUpdated: '最后更新时间', // string | boolean
		nav: [{
				text: '首页',
				link: '/'
			},
			{
				text: '编程语言',
				link: '/pages/',
				items: [{
						text: 'HTML',
						link: '/pages/HTML/'
					},
					{
						text: 'CSS',
						link: '/pages/CSS/'
					},
					{
						text: 'ES5',
						link: '/pages/Es5/'
					},
					{
						text: 'ES6',
						link: '/pages/Es6/'
					},
					{
						text: 'Typescript',
						link: '/pages/Ts/'
					}
				]
			},
			{
				text: '框架',
				link: '/pages/',
				items: [{
						text: 'VUE2',
						link: '/pages/VUE2/'
					},
					{
						text: 'VUE3',
						link: '/pages/VUE3/'
					},
					{
						text: 'NUXTJS',
						link: '/pages/NUXT/'
					}
				]
			},
			{
				text: 'Github',
				link: 'https://github.com/IGunKe/myblog'
			}
		],
		sidebar: {
			'/pages/Es5/': [{
				title: 'ECMAScript 5', // 必要的
				path: '/pages/Es5/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: ['/pages/Es5/01.md']
			}],
			'/pages/VUE2/': [{
				title: 'VUE2', // 必要的
				path: '/pages/VUE2/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/VUE2/01.md',
					'/pages/VUE2/02.md',
					'/pages/VUE2/03.md',
					'/pages/VUE2/04.md',
					'/pages/VUE2/05.md',
					'/pages/VUE2/06.md',
					'/pages/VUE2/07.md',
					'/pages/VUE2/08.md',
					'/pages/VUE2/09.md',
					'/pages/VUE2/10.md',
					'/pages/VUE2/11.md',
					'/pages/VUE2/12.md',
					'/pages/VUE2/13.md',
					'/pages/VUE2/14.md',
				]
			}],
			'/pages/NUXT/': [{
				title: 'NUXT', // 必要的
				path: '/pages/NUXT/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: ['/pages/NUXT/01.md']
			}],
			'/pages/Es6/': [{
				title: 'ECMAScript 6', // 必要的
				path: '/pages/Es6/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/Es6/01.md',
					'/pages/Es6/02.md',
					'/pages/Es6/03.md',
					'/pages/Es6/04.md',
					'/pages/Es6/05.md',
					'/pages/Es6/06.md',
					'/pages/Es6/07.md',
					'/pages/Es6/08.md'
				]
			}],
			'/pages/Ts/': [{
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
					'/pages/Ts/10.md',
					'/pages/Ts/11.md',
					'/pages/Ts/12.md',
					'/pages/Ts/13.md',
					'/pages/Ts/14.md',
					'/pages/Ts/15.md'
				]
			}]
		}
	}
};
