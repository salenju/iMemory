const Config = {
  // Header配置
  HEADER_CONFIG: {
    title: {
      value: 'iMemory',
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
        >
          <path
            d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
            fill="#05A081"
          ></path>
          <path
            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
            fill="#fff"
          ></path>
        </svg>
      ),
      link: '/',
    },
    menuItems: [
      {
        value: 'Dashboard',
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

  // Footer配置
  FOOTER_CONFIG: {},

  // Theme配置
  THEME_CONFIG: {
    '@ime-header-background': '#f5f5f5',
    '@ime-body-background': '#f5f5f5',
    '@ime-footer-background': '#f5f5f5',
    '@primary-color': '#0e8aec',
  },

  // 白色/暗黑模式配置(暗黑模式默认关闭)
  DARK_MODULE: false,
}

export default Config
