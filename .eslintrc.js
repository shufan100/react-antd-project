// 修改需要重启项目
module.exports = {
  // 环境，这里可以设置环来做区别判断
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // 使用的扩展库
  // extends: ['airbnb'],
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  // 解析器用于解析代码
  parser: 'babel-eslint',
  // 解析器配置
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // 可以全局使用变量
  globals: {
    Babel: true,

    React: true,
  },
  // 第三方插件
  plugins: ['react', 'jsx-a11y'],
  /**规则配置
   * "off"或者0    //关闭规则关闭
   * "warn"或者1    //在打开的规则作为警告（不影响退出代码）
   * "error"或者2    //把规则作为一个错误（退出代码触发时为1）
   */
  rules: {
    strict: 2, //使用严格模式
    'linebreak-style': [0, 'unix'], //换行风格
    quotes: ['error', 'single'], //单双引号
    'quote-props': 0, //对象字面量中的属性名是否强制双引号
    // 'semi': ['error', 'always'], //分号
    semi: 0, //分号
    'no-console': 0, //禁止使用console
    indent: 0, // 禁止缩进错误
    'no-redeclare': 2, //禁止重复声明变量
    'no-extra-parens': 0, //禁止非必要的括号
    'no-extra-semi': 2, //禁止多余的冒号
    'no-func-assign': 2, //禁止重复的函数声明
    'no-unreachable': 2, //不能有无法执行的代码
    'no-use-before-define': 2, //未定义前不能使用
    'no-var': 0, //禁用var，用let和const代替
    'arrow-body-style': [2, 'as-needed'], // 箭头函数直接返回的时候不需要 大括号 {}
    'no-restricted-syntax': 0, // 允许使用 for in
    'no-trailing-spaces': 0, // 允许代码后面空白
    'no-return-await': 0, // 允许返回 await
    'consistent-return': 0, // 不需要每次都有返回
    'prefer-rest-params': 0, // 允许使用 arguments
    'comma-dangle': ['error', 'never'], //对象字面量项尾不能有逗号
    'no-underscore-dangle': 0, // 标识符不能以_开头或结尾
    'no-alert': 0, //禁止使用alert confirm prompt
    'no-param-reassign': 0, //禁止给参数重新赋值
    'guard-for-in': 0, //for in循环要用if语句过滤

    // ----------------------------------
    // 有一些 event 的时候，不需要 role 属性，不需要其他解释
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    // 类成员之间空行问题
    'lines-between-class-members': 0,
    // 不区分是否在 despendencies
    'import/no-extraneous-dependencies': 0,
    // 引用时候根据根目录基础
    'import/no-unresolved': 0,
    // 允许在 .js 和 .jsx 文件中使用  jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // jsx > 紧跟着属性
    // 'react/jsx-closing-bracket-location': [1, 'after-props'],
    // 不区分是否是 无状态组件
    'react/prefer-stateless-function': 0,
  },
}
