module.exports = {
    base:'/docs/',
    themeConfig: {
        logo: '/assets/img/logo.jpg',
        //   navbar: false,     //全局禁用导航栏
        lastUpdated: '更新', // string | boolean

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },

            {
                text: 'Languages',
                items: [                    //items 来在 下拉列表 中设置分组
                    {
                        text: 'Group1', items: [
                            { text: 'Home', link: '/' },
                            { text: '关于1', link: '/about/' },
                        ]
                    },
                    {
                        text: 'Group2', items: [
                            { text: 'Home', link: '/' },
                            { text: '关于2', link: '/about/' },
                        ]
                    }
                ]
            },

            { text: 'External', link: 'https://google.com' },
        ],
        // sidebar: 'auto',      //全局自动生成侧栏

        sidebar: [
            '/',
            '/about',
        ],

    },

}