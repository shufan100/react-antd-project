/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-02-22 21:16:16
 * @FilePath: \react-antd-project\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 修改需要重启项目
module.exports = {
  // 设置环境
  env: {
    browser: ·,
    commonjs: true,
    es6: true
  },
  // 使用的扩展库
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  // 解析器用于解析代码
  parser: 'babel-eslint',
  // 解析器配置
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6, // 支持es6
    sourceType: 'module' // 使用es6模块化
  },
  // 可以全局使用变量
  globals: {
    Babel: true,

    React: true
  },
  // 第三方插件
  plugins: ['react', 'jsx-a11y', 'react-hooks'],

  // eslint检查规则：0/off：关闭； 1/warn：警告；2/error:错误
  // https://cn.eslint.org/docs/rules/
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
    'arrow-body-style': [2, 'as-needed'], // 箭头函数直接返回的时候不需要 大括号 {}default case
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
    'no-template-curly-in-string': 0, //字符串模板

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
    //默认情况下，禁止所有类型的匿名默认导出，但可以通过在选项中切换它们来选择性地允许任何类型
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true, //export default []
        allowArrowFunction: true, //export default () => {}
        allowAnonymousClass: true, //export default class {}
        allowAnonymousFunction: true, //export default function () {}
        allowCallExpression: true, // export default function () {}  export default foo(bar)
        allowLiteral: true, //export default 123
        allowObject: true //export default {}
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn' // <--- THIS IS THE NEW RULE
  }
}
