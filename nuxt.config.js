module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MolyCHN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      // { src: 'http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'http://cdn.bootcss.com/highlight.js/8.0/styles/github.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins import
  */
  vender: [
    'element-ui'
  ],
  babel: {
    'plugins': [['component', [
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments: true
  },
  plugins: [
    {src: '~plugins/element-ui', ssr: true},
    {src: '~/plugins/marked.js'},
    {src: '~/plugins/highlight.js'}
    // {src: '~plugins/axios', ssr: true}
  ],
  css: [
    // 全部引用的时候需要用到
    'element-ui/lib/theme-chalk/index.css',
    'highlight.js/styles/ocean.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'marked'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
