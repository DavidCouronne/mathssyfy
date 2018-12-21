# Démarrage

Dans cette partie, nous allons voir comment créer un site avec Vuepress à partir de zéro ("from scratch"). Les explications détaillées sur la syntaxe des codes ou le pourquoi du parce que seront vues dans d'autres parties.

## Création du projet

Pour commencer, nous allons créer un dossier pour contenir le projet.
Par exemple `vuepress-test`
Placer-vous dans le dossier (vide pour le moment), puis clic-droit et "Open with Code".
Visual Studio Code s'ouvre :)
Créer un nouveau fichier nommé `README.md`
Dans ce fichier, vous pouvez taper (ou copier-coller) le code suivant:

``` markdown
# Ma première page
Quelques tests
## Une première partie
Voici une première partie
## Une deuxième partie
Et une deuxième partie
```
Enregistrer le fichier avec CTRL+S

Pour tester si tout fonctionne bien, nous allons ouvrir un terminal dans Visual Studio Code avec le raccourci CTRL+ù (ou dans le menu "view" puis Terminal)

Dans le terminal taper:

``` bash
vuepress dev
```
Après un certain temps, un server de développement est créé. Ouvrir votre navigateur Internet préféré puis taper `localhost:8080`

Vous devriez voir le texte s'afficher. Bien sûr pour le moment, ce n'est pas très joli, mais cela permet de tester si tout fonctionne bien.

## Structurer son dossier

Vuepress suit le principe **"Convention est mieux que configuration"** (**"Convention is better than configuration"**), nous allons donc créer les dossier suivant (toujours dans Visual Studio Code):

- un dossier `.vuepress`
- un dossier `docs`
- dans le dossier `.vuepress` vous allez créer un fichier `config.js`
- dans le dossier `docs`vous aller créer un fichier `README.md`

Vous devez avoir la structure suivante:

::: tip vuepress-test
```sh
.
├ docs
├── README.md
├ .vuepress
├── config.js
├ README.md
```
:::

::: warning Attention aux noms de fichiers et de dossiers
Les noms de fichiers et de dossiers ne doivent pas:
- contenir d'espace
- contenir de caractères spéciaux ou de lettres accentuées
- bien respecter la "casse", c'est-à-dire les majuscules et les minuscules.
:::

## Quelques explications

- Le dossier `docs` va contenir le contenu du site. En fait on pourrait le nommer comme on veut, ou presque.
- le dossier `.vuepress` est un dossier qui est lu automatiquement par Vuepress. Il contient en particulier le fichier `config.js` que nous allons commencer à manipuler dans la prochaine partie.

