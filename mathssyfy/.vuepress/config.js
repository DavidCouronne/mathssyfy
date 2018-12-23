const container = require('markdown-it-container')

module.exports = {
  head: [
    ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
    ['link', {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"}],
    ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"}],
  ],
  title: 'MathsSyfy',
  description: 'Mathématiques et Informatique',
  plugins: [
  '@vuepress/active-header-links'
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
    {text: 'GitHub', link: 'https://github.com/DavidCouronne/mathssyfy'},     
    ],
    sidebar: {
      '/docs/informatique/Vuepress/': [
        '',
        'demarrer',
        'config1',
        'config2',
        'sidebar',
        'exercice',
        'deploy',
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