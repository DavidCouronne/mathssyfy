# Utiliser katex

::: tip Avertissement
Nous allons utiliser le plugin markdown-it-katex, basé sur katex, qui permet d'utiliser une syntaxe équivalente à LaTeX dans les fichiers Markdown.

Mais ce n'est pas du "vrai" LaTeX !
:::

## Installer markdown-it-katex

```console
yarn add markdown-it-katex
```

Dans le fichier `config.js`, nous avons deux paramètres à ajouter:
```javascript
markdown: {
    config: md => {
      var mk = require('markdown-it-katex');
      md.use(mk);
    }
  }

```

et

```javascript
head: [   
    ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
  ],
```

Si vous avez suivi le tuto jusqu'ici, votre fichier config.js devrait ressembler à ça:

```javascript
// .vuepress/config.js
module.exports = {
  head: [
    ['link', {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
    ['link', {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"}],
    ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"}],
  ],
    themeConfig: {
      ... //  navbar et sidebar...
    },
    markdown: {
      config: md => {
        var mk = require('markdown-it-katex');
        md.use(mk);
      }
    }
  } 
```

## LaTeX et katex

```markdown
Maths en ligne: $\sqrt{2}$

Maths centrés: 
$$\lim_{x \to +\infty} \frac{e^x}{x} = +\infty$$
```

Maths en ligne: $\sqrt{2}$

Maths centrés: 
$$\lim_{x \to +\infty} \frac{e^x}{x} = +\infty$$

