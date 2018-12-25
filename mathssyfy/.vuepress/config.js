module.exports = {
  head: [
    ['meta', {name: "google-site-verification", content: "oJi9F2YoTJCMrpn-9Y8pDsfKfgIWeR_r-w2axieKqgQ"}],
    ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
    ['link', {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"}],
    ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"}],
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'fr-FR', // this will be set as the lang attribute on <html>
      title: 'MathsSyfy',
      description: 'Mathématiques, Vuepress, Markdown, Python, Github, NodeJS'
    }
  },
  title: 'MathsSyfy',
  description: 'Mathématiques et Informatique',
  plugins: [
  '@vuepress/active-header-links',
  '@vuepress/google-analytics'
] ,
ga: 'UA-131298008-1',


  themeConfig: {
    repo: 'DavidCouronne/mathssyfy',
    
    locales: {
      '/': {
        label: 'Français',
        selectText: 'Languages',
        lastUpdated: 'Last Updated'
      }},
    sidebarDepth: 2,
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Astuces', link: '/docs/informatique/HowTo/' },
      { text: 'Vuepress', link: '/docs/informatique/Vuepress/'},
      { text: 'Mathématiques', 
        items: [
          { text: 'Sujets', link: '/docs/maths/sujets/' },
          { text: 'Cours', link: '/docs/maths/cours/' },
    ]},    
    ],
    sidebar: {
      '/docs/informatique/Vuepress/': [
        '',
        'demarrer',
        'config1',
        'config2',
        'sidebar',
        'exercice',
        'katex',
        'deploy',
        
      ],
      '/docs/informatique/HowTo/': [
        ''
      ],
      '/docs/': [
        '',
      ],
    },
    serviceWorker: {
      updatePopup: true, // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      updatePopup: { 
          message: "Nouveau contenu disponible.", 
          buttonText: "Rafraîchir" 
      }
    }
  },
  
  markdown: {
    lineNumbers: false,
    config: md => {
      // use more markdown-it plugins!
      var mk = require('markdown-it-katex');
      md.use(mk);
    }
  }
}