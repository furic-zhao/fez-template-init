module.exports = {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'src/views/jquery/': "userModel && modelConfig.includes('jquery')",
    'src/views/react/': "userModel && modelConfig.includes('react')",
    'src/views/vue/': "userModel && modelConfig.includes('vue')",
    'webpack.config.vue.js': "userModel && modelConfig.includes('vue')"
}