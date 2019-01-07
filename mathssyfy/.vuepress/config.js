module.exports = {
  head: [
    ['meta', {name: "google-site-verification", content: "oJi9F2YoTJCMrpn-9Y8pDsfKfgIWeR_r-w2axieKqgQ"}],
    ['link', {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"}],
    ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"}],
    ['link', {rel:"stylesheet",
     href:"https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",
     integrity:"sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",
      crossorigin:"anonymous"}],
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
ga: 'UA-131298008-1',


  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be: 
      // updatePopup: { 
      //    message: "New content is available.", 
      //    buttonText: "Refresh" 
      // }
    },
    repo: 'DavidCouronne/mathssyfy',
    docsDir: 'mathssyfy',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    
    locales: {
      '/': {
        label: 'Français',
        selectText: 'Languages',
        lastUpdated: 'Last Updated'
      }},
    sidebarDepth: 2,
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Ressources Dev', link: '/docs/informatique/HowTo/' },
      { text: 'Vuepress', link: '/docs/informatique/Vuepress/'},
      { text: 'Cours Maths', link: '/docs/maths/cours/' },
      { text: 'Sujets Maths', link: '/docs/maths/sujets/'},    
    ],
    sidebar: {
      '/docs/maths/sujets/2018-nvellecaledonie/': [
        '',
        'corrige',
      ],
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
      const mymacroskatex = {
        "\\vect": "\\overrightarrow{#1}"
    };
      md.use(mkn, {
        "macros": mymacroskatex
      });
      md.use(mf);
    }
  }
}