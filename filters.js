module.exports = {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'src/views/demo-jquery/': "userModel && modelConfig.includes('jquery')",
    'src/views/demo-react/': "userModel && modelConfig.includes('react')",
    'src/views/demo-vue/': "userModel && modelConfig.includes('vue')",
    'webpack.config.vue.js': "userModel && modelConfig.includes('vue')"
}