const Config = {
  // 左侧menu配置
  SIDE_MENU_CONFIG: {
    title: '菜单',
    menuItems: [
      {
        value: 'Dashboard',
        link: '',
      },
      {
        value: 'Shorcuts',
        link: '',
      },
      {
        value: 'Overview',
        link: '',
      },
      {
        value: '我的收藏',
        link: '',
      },
      {
        value: '关于我们',
        link: '',
      },
      {
        value: '登录',
        link: '/user-center/login',
      },
    ],
  },

  // Header配置
  HEADER_CONFIG: {},

  // Footer配置
  FOOTER_CONFIG: {},

  // Theme配置
  THEME_CONFIG: {
    '@layout-header-background': '#f5f5f5',
    '@layout-body-background': '#f5f5f5',
    '@layout-footer-background': '#f5f5f5',
    '@primary-color': '#0e8aec',
  },

  // 白色/暗黑模式配置(暗黑模式默认关闭)
  DARK_MODULE: false,
}

export default Config