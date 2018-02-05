// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 结束行使用分号';'
    'semi':'off',
    // 不必要的分号
    'no-extra-semi': 'error',
    // 单双引号
    'quotes':'off',
    // 空间
    'space-before-blocks': 'warn',
    // 是否允许使用console
    // 'eslint-disable-next-line':'warn',
    // 是否允许使用console
    // 'eslint-disable':'warn',
    // allow async-await
    'generator-star-spacing': 'warn',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-restricted-syntax": [
        "off",
        {
            "selector": "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
            "message": "Unexpected property on console object was called"
        }
    ],
    //要求结束符
    'eol-last':'off',
    // 函数间隔
    'space-before-function-paren':'off',
    'arrow-spacing':'off'
  }
}
