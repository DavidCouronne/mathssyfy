
# La sidebar

<ClientOnly>
  <ButtonBackToTop/>
</ClientOnly>


Le paramétrage de la sidebar va ressembler à celui de la navbar, avec quelques difficultés supplémentaires.


## Si le document n'a qu'une seule page

C'est le cas favorable. Nous allons prendre notre page sur les multiplications et ajouter:

``` md
// .docs/cours/multiplication/tables-multiplications.md
---
sidebar: auto
---
# Les tables de multiplication
## La table de 1
1*1=1

1*2=2

...
## La table de 2
2*1=2

2*2=4

...
```

Relancez le serveur, puis naviguez vers la page de multiplications pour voir l'effet.

## Si le document possède plusieurs pages

C'est le cas de notre "cours" sur les additions. Le paramétrage va se faire dans le fichier `config.js`

``` js
// .vuepress/config.js
module.exports = {
    themeConfig: {
      sidebar: {
        '/docs/cours/addition/': [
          'table1.md',
          'table2.md'
        ],
        '/': [''],
        '/docs/':['']
        
      },
      nav: [
        { text: 'Accueil', link: '/' },
        { text: 'Exercices', link: '/docs/exercices/' },
        { text: 'Cours', 
          items: [
            { text: 'Accueil Cours', link: '/docs/cours/' },
            { text: 'Additions', 
            items: [
              { text: 'table de 1',link: '/docs/cours/addition/table1.md' },
              { text: 'table de 2', link: '/docs/cours/addition/table2.md'}
            ]},
            { text: 'Multiplications', link: '/docs/cours/multiplication/tables-multiplication.md'},

      ]}, 
      ],
    }
  }
  
```
En fait c'est toute la partie sidebar qui a changé, le reste est identique.

Nous paramétrons le dossier addition avec deux pages, table1 et table2. L'ordre est important !

Relancez le serveur pour voir l'effet. Si tout va bien, vous verrez des liens en bas de page pour la page suivante.

