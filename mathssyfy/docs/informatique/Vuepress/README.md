---
sidebarDepth: 3
title: Vuepress bâtir un site de A à Z
metaTitle: Les bases de l'installation de Vuepress, NodeJS, Yarn, Visual Studio Code
lang: fr-FR
---
# Vuepress batir un site de A à Z

<ClientOnly>
  <ButtonBackToTop/>
</ClientOnly>

La documentation officielle est ici: [VuePress](https://vuepress.vuejs.org/)

## Les différents outils

Nous avons besoin de:

- NodeJS
- Yarn (optionnel mais fortement recommandé)
- Un éditeur: Visual Studio Code
- Et bien sur Vuepress !

### Installation de NodeJS

1. Télécharger la dernière version de NodeJS sur le site officiel: [NodeJS](https://nodejs.org/en/)
2. Lancer l'installation
::: warning Attention
- L'installation prend du temps. Après une partie graphique, elle passe en ligne de commande. Ne pas avoir peur :)
- L'installation nécessite un redémarrage sous Windows 10
:::

### Installation de yarn

yarn est un gestionnaire de packages, comme npm qui est fourni avec NodeJS.

yarn permet une meilleure gestion des dépendances, et il est préconisé par la documentation officielle de Vuepress.

La documentation officielle: [yarn](https://yarnpkg.com/fr/)

Le plus simple est de l'installer en ligne de commande, avec privilèges administrateur:

``` bash{4}
choco install yarn
```

### Installation de Visual Studio Code

Vous pouvez bien sûr utiliser un autre éditeur, mais celui-ci est vraiment pratique.
Site officiel: [Visual Studio Code](https://code.visualstudio.com/)

### Installation de Vuepress

En ligne de commande:

``` sh
yarn global add vuepress
```




