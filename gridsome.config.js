// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//const tailwind = require('tailwindcss')
//const purgecss = require('@fullhuman/postcss-purgecss')

//const postcssPlugins = [
  //tailwind(),
//]

//if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))



module.exports = {
  siteName: 'Forging Keys',
  siteDescription: 'A Keyforge Blog',

  plugins: [
    {
      use:"gridsome-plugin-tailwindcss",
      options:{
        tailwindConfig: './tailwind.config.js'
      }
  
  },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './posts', // Where .md files are located
        pathPrefix: '/posts', // Add route prefix. Optional
        template: './src/templates/Post.vue', // Optional

        plugins: [
          '@gridsome/remark-prismjs'
        ]

      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        enableIdentityWidget:false
      }
    },],
  css: {
    loaderOptions: {
      postcss: {
        //plugins: postcssPlugins,
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
