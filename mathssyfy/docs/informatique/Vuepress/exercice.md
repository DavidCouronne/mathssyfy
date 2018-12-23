# Rédiger une feuille d'exercices avec solution

<ButtonBackToTop />

L'idée est de générer le fichier suivant:

Exercice 1:

1. Calculer 2+3

<ClientOnly>
  <Solution>2+3=5</Solution>
</ClientOnly>


2. Calculer 3*4

<ClientOnly>
<Solution title='Cherchez un peu avant de regarder la solution !'>
3*4=12

$\displaystyle\lim_{n \to +\infty} \frac{n+1}{2n+4}=\frac{1}{2}$

$\RR$

</Solution>
</ClientOnly>

etc...

## Préparation

Vuepress utilise le framework [Vue.js](https://fr.vuejs.org/).

Pour créer nos "solutions", nous allons ajouter un "components" vue.js à notre projet.

Pour éviter de réinventer la roue, nous allons utiliser [Vuetify](https://next.vuetifyjs.com/en/)

Vous pouvez visiter le site pour voir toutes les possibilités de personnalisation !

Le component que nous allons utiliser est inspiré de celui-ci: [Expansion Panel](https://next.vuetifyjs.com/en/components/expansion-panels)

Pour commencer, ouvrez un terminal à la racine du projet:

``` bash
yarn add vuetify
```

Puis dans le dossier `.vuepress` vous allez créer un dossier `components`. Dans ce dossier vous allez créer un fichier `Solution.vue` dans lequel vous allez copier-coller le code suivant:

``` vue
// .vuepress/components/Solution.vue
<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div class="solution" slot="header">{{ title }}</div>
      <v-card>
        <v-card-text><slot></slot></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
export default {
    props: {
        title: {
            default: 'Solution'
        }
    }
}
</script>

<style scoped>
.solution{
    color: #72cda4;
}
</style>

```

L'objectif de ce tuto n'étant pas de vous apprendre à utiliser Vue.js, mais bien Vuepress, je ne vais pas vous expliquer le code ici.

Vous pouvez par contre personnaliser la couleur. J'ai mis la couleur par défaut de Vuepress (le vert bizarre), mais vous pouvez essayer de mettre du rouge !

``` vue
...
<style scoped>
.solution{
    color: red;
}
</style>

```

Par défaut le titre est "Solution", mais nous pouvez le changer.

## Utilisation

Nous pouvons utiliser ce component dans n'importe quel fichier. Par contre il y a une petite difficulté.

Vuepress utilise le rendu serveur: SSR pour Server Side Rendering.

Quand on est en mode développement, avec le `vuepress dev` tout se passe bien. Mais quand on va vouloir publier notre site, on va passer en mode `vuepress build`.

Notre component ne pourra pas être compilé tel quel, il va falloir l'entourer de balises spéciales.

Sans plus tarder, voici le code à mettre dans notre fichier d'exercices

``` md
// docs/exercices/README.md
---
sidebar: auto
---

# Quelques exercices

## Exercice 1:

1. Calculer 2+3

<ClientOnly>
  <Solution>
  2+3=5
  </Solution>
</ClientOnly>


2. Calculer 3*4

<ClientOnly>
<Solution title='Cherchez un peu !'>
3*4=12
</Solution>
</ClientOnly>

etc...

```

