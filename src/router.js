/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/cli',
        meta: {
            title: 'iView Cli 可视化脚手架'
        },
        component: (resolve) => require(['./views/cli.vue'], resolve)
    },
    {
        path: '/cli-en',
        meta: {
            title: 'iView Cli'
        },
        component: (resolve) => require(['./views/cli-en.vue'], resolve)
    },
    {
        path: '/live',
        meta: {
            title: '讲堂'
        },
        component: (resolve) => require(['./views/live.vue'], resolve)
    },
    {
        path: '/overview',
        meta: {
            title: '概览'
        },
        component: (resolve) => require(['./views/guide/overview.vue'], resolve)
    },
    {
        path: '/overview-en',
        meta: {
            title: 'Overview'
        },
        component: (resolve) => require(['./views/guide/overview-en.vue'], resolve)
    },
    {
        path: '/docs/guide/introduce',
        meta: {
            title: 'iView介绍'
        },
        component: (resolve) => require(['./views/guide/introduce.vue'], resolve)
    },
    {
        path: '/docs/guide/introduce-en',
        meta: {
            title: 'Introduction'
        },
        component: (resolve) => require(['./views/guide/introduce-en.vue'], resolve)
    },
    {
        path: '/docs/guide/design',
        meta: {
            title: '设计原则'
        },
        component: (resolve) => require(['./views/guide/design.vue'], resolve)
    },
    {
        path: '/docs/guide/design-en',
        meta: {
            title: 'Design Principle'
        },
        component: (resolve) => require(['./views/guide/design-en.vue'], resolve)
    },
    {
        path: '/docs/guide/layout',
        meta: {
            title: '布局'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/docs/guide/layout-en',
        meta: {
            title: 'Layout'
        },
        component: (resolve) => require(['./views/guide/layout-en.vue'], resolve)
    },
    {
        path: '/docs/guide/standard',
        meta: {
            title: '参与贡献'
        },
        component: (resolve) => require(['./views/guide/standard.vue'], resolve)
    },
    {
        path: '/docs/guide/standard-en',
        meta: {
            title: 'Contributing Guide'
        },
        component: (resolve) => require(['./views/guide/standard-en.vue'], resolve)
    },
    {
        path: '/docs/practice/case',
        meta: {
            title: '实践案例'
        },
        component: (resolve) => require(['./views/practice/case.vue'], resolve)
    },
    {
        path: '/docs/practice/logo',
        meta: {
            title: 'iView Logo 设计思路'
        },
        component: (resolve) => require(['./views/practice/logo.vue'], resolve)
    },
    {
        path: '/docs/guide/install',
        meta: {
            title: '安装'
        },
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    },
    {
        path: '/docs/guide/install-en',
        meta: {
            title: 'Installation'
        },
        component: (resolve) => require(['./views/guide/install-en.vue'], resolve)
    },
    {
        path: '/docs/guide/start',
        meta: {
            title: '快速上手'
        },
        component: (resolve) => require(['./views/guide/start.vue'], resolve)
    },
    {
        path: '/docs/guide/start-en',
        meta: {
            title: 'Quick Start'
        },
        component: (resolve) => require(['./views/guide/start-en.vue'], resolve)
    },
    {
        path: '/docs/guide/i18n',
        meta: {
            title: '国际化'
        },
        component: (resolve) => require(['./views/guide/i18n.vue'], resolve)
    },
    {
        path: '/docs/guide/i18n-en',
        meta: {
            title: 'Internationalization'
        },
        component: (resolve) => require(['./views/guide/i18n-en.vue'], resolve)
    },
    {
        path: '/docs/guide/theme',
        meta: {
            title: '定制主题'
        },
        component: (resolve) => require(['./views/guide/theme.vue'], resolve)
    },
    {
        path: '/docs/guide/theme-en',
        meta: {
            title: 'Customize Theme'
        },
        component: (resolve) => require(['./views/guide/theme-en.vue'], resolve)
    },
    {
        path: '/docs/guide/update',
        meta: {
            title: '更新日志'
        },
        component: (resolve) => require(['./views/guide/update.vue'], resolve)
    },
    {
        path: '/components/grid',
        meta: {
            title: '栅格 Grid'
        },
        component: (resolve) => require(['./views/components/grid.vue'], resolve)
    },
    {
        path: '/components/layout',
        meta: {
            title: '布局 Layout'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/components/layout-en',
        meta: {
            title: 'Layout'
        },
        component: (resolve) => require(['./views/guide/layout-en.vue'], resolve)
    },
    {
        path: '/components/color',
        meta: {
            title: '色彩 Color'
        },
        component: (resolve) => require(['./views/components/color.vue'], resolve)
    },
    {
        path: '/components/color-en',
        meta: {
            title: 'Color'
        },
        component: (resolve) => require(['./views/components/color-en.vue'], resolve)
    },
    {
        path: '/components/font',
        meta: {
            title: '字体 Font'
        },
        component: (resolve) => require(['./views/components/font.vue'], resolve)
    },
    {
        path: '/components/font-en',
        meta: {
            title: 'Font'
        },
        component: (resolve) => require(['./views/components/font-en.vue'], resolve)
    },
    {
        path: '/components/button',
        meta: {
            title: '按钮 Button'
        },
        component: (resolve) => require(['./views/components/button.vue'], resolve)
    },
    {
        path: '/components/button-en',
        meta: {
            title: 'Button'
        },
        component: (resolve) => require(['./views/components/button-en.vue'], resolve)
    },
    {
        path: '/components/icon',
        meta: {
            title: '图标 Icon'
        },
        component: (resolve) => require(['./views/components/icon.vue'], resolve)
    },
    {
        path: '/components/input',
        meta: {
            title: '输入框 Input'
        },
        component: (resolve) => require(['./views/components/input.vue'], resolve)
    },
    {
        path: '/components/radio',
        meta: {
            title: '单选框 Radio'
        },
        component: (resolve) => require(['./views/components/radio.vue'], resolve)
    },
    {
        path: '/components/checkbox',
        meta: {
            title: '多选框 Checkbox'
        },
        component: (resolve) => require(['./views/components/checkbox.vue'], resolve)
    },
    {
        path: '/components/checkbox-en',
        meta: {
            title: 'Checkbox'
        },
        component: require('./views/components/checkbox-en.vue')
    },
    {
        path: '/components/switch',
        meta: {
            title: '开关 Switch'
        },
        component: (resolve) => require(['./views/components/switch.vue'], resolve)
    },
    {
        path: '/components/table',
        meta: {
            title: '表格 Table'
        },
        component: (resolve) => require(['./views/components/table.vue'], resolve)
    },
    {
        path: '/components/select',
        meta: {
            title: '选择器 Select'
        },
        component: (resolve) => require(['./views/components/select.vue'], resolve)
    },
    {
        path: '/components/slider',
        meta: {
            title: '滑块 Slider'
        },
        component: (resolve) => require(['./views/components/slider.vue'], resolve)
    },
    {
        path: '/components/date-picker',
        meta: {
            title: '日期选择器 DatePicker'
        },
        component: (resolve) => require(['./views/components/date-picker.vue'], resolve)
    },
    {
        path: '/components/date-picker-en',
        meta: {
            title: 'DatePicker'
        },
        component: (resolve) => require(['./views/components/date-picker-en.vue'], resolve)
    },
    {
        path: '/components/time-picker',
        meta: {
            title: '时间选择器 TimePicker'
        },
        component: (resolve) => require(['./views/components/time-picker.vue'], resolve)
    },
    {
        path: '/components/cascader',
        meta: {
            title: '级联选择 Cascader'
        },
        component: (resolve) => require(['./views/components/cascader.vue'], resolve)
    },
    {
        path: '/components/cascader-en',
        meta: {
            title: 'Cascader'
        },
        component: require('./views/components/cascader-en.vue')
    },
    {
        path: '/components/transfer',
        meta: {
            title: '穿梭框 Transfer'
        },
        component: (resolve) => require(['./views/components/transfer.vue'], resolve)
    },
    {
        path: '/components/input-number',
        meta: {
            title: '数字输入框 InputNumber'
        },
        component: (resolve) => require(['./views/components/input-number.vue'], resolve)
    },
    {
        path: '/components/rate',
        meta: {
            title: '评分 Rate'
        },
        component: (resolve) => require(['./views/components/rate.vue'], resolve)
    },
    {
        path: '/components/upload',
        meta: {
            title: '上传 Upload'
        },
        component: (resolve) => require(['./views/components/upload.vue'], resolve)
    },
    {
        path: '/components/form',
        meta: {
            title: '表单 Form'
        },
        component: (resolve) => require(['./views/components/form.vue'], resolve)
    },
    {
        path: '/components/alert',
        meta: {
            title: '警告提示 Alert'
        },
        component: (resolve) => require(['./views/components/alert.vue'], resolve)
    },
    {
        path: '/components/alert-en',
        meta: {
            title: 'Alert'
        },
        component: (resolve) => require(['./views/components/alert-en.vue'], resolve)
    },
    {
        path: '/components/card',
        meta: {
            title: '卡片 Card'
        },
        component: (resolve) => require(['./views/components/card.vue'], resolve)
    },
    {
        path: '/components/card-en',
        meta: {
            title: 'Card'
        },
        component: (resolve) => require(['./views/components/card-en.vue'], resolve)
    },
    {
        path: '/components/message',
        meta: {
            title: '全局提示 Message'
        },
        component: (resolve) => require(['./views/components/message.vue'], resolve)
    },
    {
        path: '/components/notice',
        meta: {
            title: '通知提醒 Notice'
        },
        component: (resolve) => require(['./views/components/notice.vue'], resolve)
    },
    {
        path: '/components/modal',
        meta: {
            title: '对话框 Modal'
        },
        component: (resolve) => require(['./views/components/modal.vue'], resolve)
    },
    {
        path: '/components/progress',
        meta: {
            title: '进度条 Progress'
        },
        component: (resolve) => require(['./views/components/progress.vue'], resolve)
    },
    {
        path: '/components/badge',
        meta: {
            title: '徽标数 Badge'
        },
        component: (resolve) => require(['./views/components/badge.vue'], resolve)
    },
    {
        path: '/components/badge-en',
        meta: {
            title: 'Badge'
        },
        component: (resolve) => require(['./views/components/badge-en.vue'], resolve)
    },
    {
        path: '/components/collapse',
        meta: {
            title: '折叠面板 Collapse'
        },
        component: (resolve) => require(['./views/components/collapse.vue'], resolve)
    },
    {
        path: '/components/collapse-en',
        meta: {
            title: 'Collapse'
        },
        component: (resolve) => require(['./views/components/collapse-en.vue'], resolve)
    },
    {
        path: '/components/timeline',
        meta: {
            title: '时间轴 Timeline'
        },
        component: (resolve) => require(['./views/components/timeline.vue'], resolve)
    },
    {
        path: '/components/tag',
        meta: {
            title: '标签 Tag'
        },
        component: (resolve) => require(['./views/components/tag.vue'], resolve)
    },
    {
        path: '/components/tooltip',
        meta: {
            title: '文字提示 Tooltip'
        },
        component: (resolve) => require(['./views/components/tooltip.vue'], resolve)
    },
    {
        path: '/components/poptip',
        meta: {
            title: '气泡提示 Poptip'
        },
        component: (resolve) => require(['./views/components/poptip.vue'], resolve)
    },
    {
        path: '/components/carousel',
        meta: {
            title: '走马灯 Carousel'
        },
        component: (resolve) => require(['./views/components/carousel.vue'], resolve)
    },
    {
        path: '/components/carousel-en',
        meta: {
            title: 'Carousel'
        },
        component: (resolve) => require(['./views/components/carousel-en.vue'], resolve)
    },
    {
        path: '/components/tree',
        meta: {
            title: '树形控件 Tree'
        },
        component: (resolve) => require(['./views/components/tree.vue'], resolve)
    },
    {
        path: '/components/menu',
        meta: {
            title: '导航菜单 Menu'
        },
        component: (resolve) => require(['./views/components/menu.vue'], resolve)
    },
    {
        path: '/components/tabs',
        meta: {
            title: '标签页 Tabs'
        },
        component: (resolve) => require(['./views/components/tabs.vue'], resolve)
    },
    {
        path: '/components/dropdown',
        meta: {
            title: '下拉菜单 Dropdown'
        },
        component: (resolve) => require(['./views/components/dropdown.vue'], resolve)
    },
    {
        path: '/components/page',
        meta: {
            title: '分页 Page'
        },
        component: (resolve) => require(['./views/components/page.vue'], resolve)
    },
    {
        path: '/components/breadcrumb',
        meta: {
            title: '面包屑 Breadcrumb'
        },
        component: (resolve) => require(['./views/components/breadcrumb.vue'], resolve)
    },
    {
        path: '/components/breadcrumb-en',
        meta: {
            title: 'Breadcrumb'
        },
        component: (resolve) => require(['./views/components/breadcrumb-en.vue'], resolve)
    },
    {
        path: '/components/steps',
        meta: {
            title: '步骤条 Steps'
        },
        component: (resolve) => require(['./views/components/steps.vue'], resolve)
    },
    {
        path: '/components/loading-bar',
        meta: {
            title: '加载进度条 LoadingBar'
        },
        component: (resolve) => require(['./views/components/loading-bar.vue'], resolve)
    },
    {
        path: '/components/circle',
        meta: {
            title: '进度环 Circle'
        },
        component: (resolve) => require(['./views/components/circle.vue'], resolve)
    },
    {
        path: '/components/circle-en',
        meta: {
            title: 'Circle'
        },
        component: (resolve) => require(['./views/components/circle-en.vue'], resolve)
    },
    {
        path: '/components/affix',
        meta: {
            title: '图钉 Affix'
        },
        component: (resolve) => require(['./views/components/affix.vue'], resolve)
    },
    {
        path: '/components/affix-en',
        meta: {
            title: 'Affix'
        },
        component: (resolve) => require(['./views/components/affix-en.vue'], resolve)
    },
    {
        path: '/components/back-top',
        meta: {
            title: '回到顶部 BackTop'
        },
        component: (resolve) => require(['./views/components/back-top.vue'], resolve)
    },
    {
        path: '/components/back-top-en',
        meta: {
            title: 'BackTop'
        },
        component: (resolve) => require(['./views/components/back-top-en.vue'], resolve)
    },
    {
        path: '/components/spin',
        meta: {
            title: '加载中 Spin'
        },
        component: (resolve) => require(['./views/components/spin.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/'
    }
];

export default routers;
