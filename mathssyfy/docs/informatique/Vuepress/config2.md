# Ajouter quelques détails...

Dans cette partie, nous allons voir:

[[toc]]

## Restructer (encore..) son projet

Vuepress est un outil permettant de créer de la documentation, et donc des cours, des tutos. Vous pouvez bien sûr en faire un site de recettes de cuisine :)

Vuepress utilise le Javascript pour la logique, et  Markdown pour le contenu.

Nous allons structure notre dossier `/docs/` pour y mettre notre contenu, puis utiliser notre fichier `config.js` pour gérer le rendu.

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
