# Ajouter quelques détails...

<BackToTop />
Dans cette partie, nous allons voir: 

[[toc]]

## Restructurer (encore..) son projet

Vuepress est un outil permettant de créer de la documentation, et donc des cours, des tutos. Vous pouvez bien sûr en faire un site de recettes de cuisine :)

Vuepress utilise le Javascript pour la logique, et  Markdown pour le contenu.

Nous allons structurer notre dossier `/docs/` pour y mettre notre contenu, puis utiliser notre fichier `config.js` pour gérer le rendu.

Supposons que nous ayons deux parties principales dans notre site: une partie cours et une partie exercices. Chaque partie comporte plusieurs sous-parties, et chaque sous-partie comporte plusieurs pages.

Pour simplifier, mais pas trop, nous allons créer le site suivant:
* cours
    * chapitre 1: Les tables d'addition
        * Page 1: la table de 1
        * Page 2: la table de 2
    * chapitre 2: Les tables de multiplication
        * Une seule page avec plusieurs tables
* exercices
    * Une seule page avec plusieurs exercices, et l'affichage à la demande de la solution !

Dans le dossier `/docs/` nous allons créer deux dossiers: `/cours/` et `/exercices/`.
Dans le dossier `/docs/cours/` nous allons créer un fichier `README.md`. Ces fichiers sont les points d'entrée de chaque dossier.

Dans ce fichier nous allons mettre le code suivant:

``` md
// ./docs/cours/README.md
# Cours

Nous allons voir les tables d'addition et de multiplication ...
```

Toujours dans le dossier `/docs/cours/`, nous allons créer les dossier `addition` et `multiplication`.

Dans le dossier `/docs/cours/addition/` nous allons créer les fichiers `table1.md` puis `table2.md`.

``` md
// .docs/cours/addition/table1.md
# La table de 1
1+1=2

1+2=3

...
```
``` md
// .docs/cours/addition/table2.md
# La table de 2
2+1=3

2+2=4

...
```

Dans le dossier `/docs/cours/multiplication/` nous allons créer le fichier `tables-multiplication.md`

``` md
// .docs/cours/multiplication/tables-multiplications.md
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

Dans le dossier `/docs/exercices/` nous allons créer un fichier `README.md`
``` md
// .docs/exercices/README.md
# Quelques exercices
...
```

## Ajouter la navbar

La navbar, c'est la barre de navigation en haut du site, qui permet d'accéder directement à certaines pages.

Les liens pointent vers des dossiers. Si le dossier contient un fichier README.md, celui-ci est ouvert automatiquement. Sinon, il faut spécifier le nom du fichier cible.

Pour ce tuto, nous allons créer:
- un lien vers la page d'accueil
- un lien vers la page d'exercices
- un "menu déroulant" vers la page d'accueil des cours, vers les additions et les multiplications

Tout va se passer dans le fichier `config.js`.

Je vais vous montrer le code, puis vous expliquer comment l'injecter dans le fichier de configuration:

``` js
      nav: [
        { text: 'Accueil', 
        link: '/' },
        { text: 'Exercices', 
        link: '/docs/exercices/' },
        { text: 'Cours', 
          items: [
            { text: 'Accueil Cours', 
            link: '/docs/cours/' },
            { text: 'Additions', 
            items: [
              { text: 'table de 1',
              link: '/docs/cours/addition/table1.md' },
              { text: 'table de 2', 
              link: '/docs/cours/addition/table2.md'}
            ]},
            { text: 'Multiplications', 
            link: '/docs/cours/multiplication/tables-multiplication.md'},

      ]}, 
      ],
```

Pour bien voir comment tout ceci fonctionne, nous allons l'injecter dans `config.js`

``` js
// .vuepress/config.js
module.exports = {
    themeConfig: {
      sidebar: [
        '/',
        '/docs/',
      ],
      nav: [
        { text: 'Accueil', 
        link: '/' },
        { text: 'Exercices', 
        link: '/docs/exercices/' },
        { text: 'Cours', 
          items: [
            { text: 'Accueil Cours', 
            link: '/docs/cours/' },
            { text: 'Additions', 
            items: [
              { text: 'table de 1',
              link: '/docs/cours/addtion/table1.md' },
              { text: 'table de 2', 
              link: '/docs/cours/addtion/table2.md'}
            ]},
            { text: 'Multiplications', 
            link: '/docs/cours/multiplication/tables-multiplication.md'},

      ]}, 
      ],
    }
  }
  
```
::: tip Pratique
Vous pouvez bien sûr copier coller le code, mais essayez de le taper directement dans VS Code pour voir la complétion automatique, et surtout commencer à coder par vous-même
:::
Vous allez relancer le serveur en tapant dans le terminal:

```bash
vuepress dev
```

Testez les liens pour comprendre le fonctionnement.

Et là: mais la sidebar alors ??? Elle est toujours bloquée avec la configuration du début !!!