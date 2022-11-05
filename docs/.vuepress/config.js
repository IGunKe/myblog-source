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
				text: '工具',
				link: '/pages/',
				items: [{
					text: 'Webpack',
					link: '/pages/Webpack/'
				}, {
					text: 'Pinia',
					link: '/pages/Pinia/'
				}, {
					text: 'vueRouter',
					link: '/pages/vueRouter/'
				}]
			},
			{
				text: '其他',
				link: '/pages/',
				items: [{
					text: '其他',
					link: '/pages/IT/'
				}, {
					text: 'NODEJS',
					link: '/pages/NodeJS/'
				}, {
					text: 'Web',
					link: '/pages/Web/'
				}]
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
				children: [
					'/pages/Es5/01.md',
					'/pages/Es5/02.md',
					'/pages/Es5/03.md',
					'/pages/Es5/04.md',
					'/pages/Es5/05.md',
					'/pages/Es5/06.md',
					'/pages/Es5/07.md',
					'/pages/Es5/08.md',
					'/pages/Es5/09.md',
					'/pages/Es5/10.md',
					'/pages/Es5/11.md',
					'/pages/Es5/12.md',
					'/pages/Es5/13.md',
					'/pages/Es5/14.md',
					'/pages/Es5/15.md',
					'/pages/Es5/16.md',
					'/pages/Es5/17.md',
					'/pages/Es5/18.md',
				]
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
					'/pages/VUE2/15.md',
					'/pages/VUE2/16.md',
					'/pages/VUE2/17.md',
					'/pages/VUE2/18.md',
					'/pages/VUE2/19.md',
					'/pages/VUE2/20.md',
					'/pages/VUE2/21.md',
					'/pages/VUE2/22.md',
					'/pages/VUE2/23.md',
					'/pages/VUE2/24.md',
					'/pages/VUE2/25.md',
					'/pages/VUE2/26.md',
					'/pages/VUE2/27.md',
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
					'/pages/Es6/08.md',
					'/pages/Es6/09.md',
					'/pages/Es6/10.md',
					'/pages/Es6/11.md',
					'/pages/Es6/12.md',

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
			}],
			'/pages/Webpack/': [{
				title: 'webpack', // 必要的
				path: '/pages/Webpack/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/Webpack/01.md',
					'/pages/Webpack/02.md',
					'/pages/Webpack/03.md',
					'/pages/Webpack/04.md',
					'/pages/Webpack/05.md',

				]
			}],
			'/pages/HTML/': [{
				title: 'HTML', // 必要的
				path: '/pages/HTML/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/HTML/01.md',
					'/pages/HTML/02.md',
					'/pages/HTML/03.md',
					'/pages/HTML/04.md',
					'/pages/HTML/05.md',
					'/pages/HTML/06.md'
				]
			}],
			'/pages/CSS/': [{
				title: 'CSS', // 必要的
				path: '/pages/CSS/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/CSS/01.md',
					'/pages/CSS/02.md',
					'/pages/CSS/03.md',
					'/pages/CSS/04.md',
				]
			}],
			'/pages/IT/': [{
				title: '其他', // 必要的
				path: '/pages/IT/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [

				]
			}],
			'/pages/NodeJS/': [{
				title: 'NodeJS', // 必要的
				path: '/pages/NodeJS/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/NodeJS/01.md',
					'/pages/NodeJS/02.md',
					'/pages/NodeJS/03.md',
				]
			}],
			'/pages/Pinia/': [{
				title: 'Pinia', // 必要的
				path: '/pages/Pinia/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/Pinia/01.md',
				]
			}],
			'/pages/VUE3/': [{
				title: 'VUE3', // 必要的
				path: '/pages/VUE3/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/VUE3/01.md',
					'/pages/VUE3/02.md',
					'/pages/VUE3/03.md',
					'/pages/VUE3/04.md',
					'/pages/VUE3/05.md',
					'/pages/VUE3/06.md',
					'/pages/VUE3/07.md',
					'/pages/VUE3/08.md',
					'/pages/VUE3/09.md',
					'/pages/VUE3/10.md',
					'/pages/VUE3/11.md',
					'/pages/VUE3/12.md',
					'/pages/VUE3/13.md',
					'/pages/VUE3/14.md',
					'/pages/VUE3/15.md',
					'/pages/VUE3/16.md',
					'/pages/VUE3/17.md',
					'/pages/VUE3/18.md',
					'/pages/VUE3/19.md',
					'/pages/VUE3/20.md',
					'/pages/VUE3/21.md',
					'/pages/VUE3/22.md',
					'/pages/VUE3/23.md',
					'/pages/VUE3/24.md',
				]
			}],
			'/pages/vueRouter/': [{
				title: 'vueRouter', // 必要的
				path: '/pages/vueRouter/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/vueRouter/01.md',
					'/pages/vueRouter/02.md',
					'/pages/vueRouter/03.md',
					'/pages/vueRouter/04.md',
					'/pages/vueRouter/05.md',
				]
			}],
			'/pages/Web/': [{
				title: 'Web', // 必要的
				path: '/pages/Web/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: [
					'/pages/Web/01.md',
					'/pages/Web/02.md',
					'/pages/Web/03.md',
					'/pages/Web/04.md',
					'/pages/Web/05.md',
				]
			}],
		}
	}
};
