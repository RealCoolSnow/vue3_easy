/*
 * @Description: 
 * @Author: CoolSnow (coolsnow2020@gmail.com)
 * @Date: 2020-09-14 16:19:45
 * @LastEditors: CoolSnow
 * @LastEditTime: 2020-09-18 11:13:44
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: ['error', 'never'], // 强制分号
    indent: ['error', 2], // 2个空格
    camelcase: 0, // 不强制_形式，或者驼峰
    'vue/html-indent': ['error', 2], // vue中2个空格
    'vue/require-default-prop': 'off', // prop的值设置默认值（后期关闭该规则）
    'vue/require-prop-type-constructor': 'off', // 关闭prop强制类型设置（后期关闭该规则）
    'vue/require-prop-types': 'off', // 关闭prop强制类型设置（后期关闭该规则）
    'vue/prop-name-casing': 'off' // prop的属性名可以为驼峰，也可以_表示
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ]
}
