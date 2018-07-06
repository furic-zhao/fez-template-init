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
        es6: true{{#if_contain modelConfig "jquery"}},
        jquery: true{{/if_contain}}
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
    ],
    {{/if_eq}}
    plugins: [
    ],
    rules: {
      {{#if_eq lintConfig "standard"}}
      // allow async-await
      'generator-star-spacing': 'off',
      {{/if_eq}}
      {{#if_eq lintConfig "airbnb"}}
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
      }],
      {{/if_eq}}
    }
}
