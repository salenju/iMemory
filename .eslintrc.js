module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: [0, 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-cond-assign': 'off',
    'react/prop-types': 0,
    'require-atomic-updates': 'off',
  },
}
