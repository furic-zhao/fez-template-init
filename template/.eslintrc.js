/**
 * ==================================
 * @2017-2018 FEZ前端模块化工程开发框架
 * https://github.com/furic-zhao/fez
 * ==================================
 */

/**
 * ---------------------------------
 * eslint配置文件，具体配置请参考：
 * https://eslint.org/docs/user-guide/configuring
 * *********************************
 * 每个项目中的.eslintrc.js将覆盖此文件的配置
 * ---------------------------------
 */

module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'

    },
    /**
     * 预定义全局变量
     * http://eslint.cn/docs/user-guide/configuring#specifying-environments
     */
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        jquery: true
    },
    {{#if_eq lintConfig "standard"}}
    extends: [
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    extends: [
        'airbnb-base'
    ],
    {{/if_eq}}
    {{#if_eq lintConfig "none"}}
    extends: [
        'plugin:vue/essential'
    ],
    {{/if_eq}}
    plugins: [],
    rules: {}
}
