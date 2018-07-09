module.exports = {
  prompts: [{
    type: 'input',
    name: 'projectName',
    message: 'Project name',
    default: 'fez-template'
  }, {
    type: 'list',
    name: 'style',
    message: 'Select style compiler',
    choices: [{
      name: 'Sass',
      value: 'scss',
      short: 'Sass',
    }, {
      name: 'Less',
      value: 'less',
      short: 'Less',
    }, {
      name: 'Stylus',
      value: 'styl',
      short: 'Stylus',
    }, {
      name: 'Css',
      value: 'css',
      short: 'Css',
    }],
  }, {
    name: 'userModel',
    type: 'confirm',
    message: 'Enable platform technology selection?',
  }, {
    when: function(answers) {
      return answers.userModel === true;
    },
    type: 'list',
    name: 'modelConfig',
    message: 'Select tech platform.',
    choices: [{
      name: 'none (configure it yourself)',
      checked: false,
      value: 'none',
      short: 'none',
    }, {
      name: 'Vue',
      checked: false,
      value: 'vue',
      short: 'Vue',
    }, {
      name: 'React',
      checked: false,
      value: 'react',
      short: 'React',
    }, {
      name: 'jQuery',
      checked: false,
      value: 'jquery',
      short: 'jQuery',
    }],
  }, {
    name: 'lint',
    type: 'confirm',
    message: 'Use ESLint to lint your code?',
  }, {
    when: function(answers) {
      return answers.lint === true;
    },
    name: 'lintConfig',
    type: 'list',
    message: 'Pick an ESLint preset',
    choices: [{
        name: 'none (configure it yourself)',
        value: 'none',
        short: 'none',
      }, {
        name: 'Standard (https://github.com/standard/standard)',
        value: 'standard',
        short: 'Standard',
      },
      {
        name: 'Airbnb (https://github.com/airbnb/javascript)',
        value: 'airbnb',
        short: 'Airbnb',
      }
    ],
  }, {
    type: 'list',
    name: 'autoInstall',
    message: 'auto run `npm install`?',
    choices: [{
        name: 'Yes, use NPM',
        value: 'npm',
        short: 'npm',
      },
      {
        name: 'Yes, use Yarn',
        value: 'yarn',
        short: 'yarn',
      },
      {
        name: 'No, I will handle that myself',
        value: false,
        short: 'no',
      },
    ],
  }],
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'src/views/jquery/': "userModel && modelConfig.includes('jquery')",
    'src/views/react/': "userModel && modelConfig.includes('react')",
    'src/views/vue/': "userModel && modelConfig.includes('vue')",
    'webpack.config.vue.js': "userModel && modelConfig.includes('vue')"
  }
}
