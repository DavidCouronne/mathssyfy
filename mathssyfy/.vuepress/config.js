const { navBar } = require("./navBar");

const { sideBar } = require("./sideBar");

module.exports = {
  head: [
    ['meta', {
      name: "google-site-verification",
      content: "oJi9F2YoTJCMrpn-9Y8pDsfKfgIWeR_r-w2axieKqgQ"
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css",
      integrity: "sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y",
      crossorigin: "anonymous"
    }],
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
    repo: 'DavidCouronne/mathssyfy',
    docsDir: 'mathssyfy',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',

    locales: {
      '/': {
        label: 'Français',
        selectText: 'Languages',
        lastUpdated: 'Last Updated'
      }
    },
    sidebarDepth: 2,
    nav: navBar(),
    sidebar: sideBar(),
  },

  markdown: {
    lineNumbers: false,
    config: md => {
      const mymacroskatex = {
        "\\vect": "\\overrightarrow{#1}"
      };
      const mkn = require('markdown-it-katex-newcommand');
      const mf = require('markdown-it-footnote');
      md.use(mkn, {
        "macros": mymacroskatex
      });
      md.use(mf);
    }
  }
}



