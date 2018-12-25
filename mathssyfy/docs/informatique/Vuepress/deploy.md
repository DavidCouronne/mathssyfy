# Hébergement du site

<ClientOnly>
  <ButtonBackToTop/>
</ClientOnly>

Nous avons bien sûr envie de déployer notre site sur Internet pour qu'il soit visible du monde entier !

Il existe plusieurs solutions. Nous allons présenter le déploiement avec Firebase (Google).

## Déploiement avec Firebase

### Création du compte
Si vous avez déjà un compte Google (Gmail ou autre...) l'inscription va être rapide:
[Firebase](https://firebase.google.com/)

Une fois l'inscription faite, créer un nouveau projet. Votre site sera hébergé sous l'URL:

`nomduprojet.firebaseapp.com`

### Les outils
Nous allons installer les outils globalement. Dans un terminal:

``` bash
yarn add global firebase-tools
```

Puis nous allons connecter notre compte:

```bash
firebase login
```
Le script va vous demander votre identifiant et votre mot de passe.

### Préparer le déploiment
Ouvrir un terminal dans le dossier du projet

``` bash
firebase init
```
``` bash
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confi
rm your choices.
 ( ) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
>(*) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
 ```
 Bien choisir `hosting`pour l'hébergement.
```bash
 ? Select a default Firebase project for this directory:
  [don't setup a default project]
> [le-nom-de-votre-projet]
  [create a new project]
```

``` bash
? What do you want to use as your public directory? (public) .vuepress/dist/
```
Le dossier `.vuepress/dist/` va être le dossier où vuepress va construire le site.

Répondre "non" à toutes les questions suivantes !


### Déployer le site

Toujours dans le terminal dans le dossier du site:

``` bash
vuepress build
```

puis

``` bash
firebase deploy --only hosting
```

Et voila !!!