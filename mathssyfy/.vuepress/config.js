const container = require('markdown-it-container')

module.exports = {
  head: [
    ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}]

  ],
  title: 'MathsSyfy',
  description: 'Mathématiques et Informatique',
  plugins: [
  '@vuepress/active-header-links',
  ['@vuepress/back-to-top', true],
] ,

  themeConfig: {
    sidebarDepth: 2,
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Astuces', link: '/docs/informatique/HowTo/' },
      { text: 'Vuepress', link: '/docs/informatique/Vuepress/'},
      { text: 'Mathématiques', 
        items: [
          { text: 'Sujets', link: '/guide/' },
          { text: 'Cours', link: '/docs/cours/' },
    ]},     
    ],
    sidebar: {
      '/docs/informatique/Vuepress/': [
        '',
        'demarrer',
        'utilisation',
      ],
      '/docs/informatique/HowTo/': [
        ''
      ],
      '/docs/': [
        '',
      ],
    }
  },
  
  markdown: {
    lineNumbers: false,
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-katex"),      
      {"throwOnError" : false,
       "errorColor" : " #cc0000",
       "displayMode" : true
      })
    }
  }
}