(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{192:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("BackToTop"),t._v(" "),n("p",[t._v("Dans cette partie, nous allons voir:")]),t._v(" "),n("p"),t._m(1),n("p"),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("Vuepress est un outil permettant de créer de la documentation, et donc des cours, des tutos. Vous pouvez bien sûr en faire un site de recettes de cuisine 😃")]),t._v(" "),n("p",[t._v("Vuepress utilise le Javascript pour la logique, et  Markdown pour le contenu.")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("Supposons que nous ayons deux parties principales dans notre site: une partie cours et une partie exercices. Chaque partie comporte plusieurs sous-parties, et chaque sous-partie comporte plusieurs pages.")]),t._v(" "),n("p",[t._v("Pour simplifier, mais pas trop, nous allons créer le site suivant:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Dans ce fichier nous allons mettre le code suivant:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),n("p",[t._v("La navbar, c'est la barre de navigation en haut du site, qui permet d'accéder directement à certaines pages.")]),t._v(" "),n("p",[t._v("Les liens pointent vers des dossiers. Si le dossier contient un fichier README.md, celui-ci est ouvert automatiquement. Sinon, il faut spécifier le nom du fichier cible.")]),t._v(" "),n("p",[t._v("Pour ce tuto, nous allons créer:")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),n("p",[t._v("Je vais vous montrer le code, puis vous expliquer comment l'injecter dans le fichier de configuration:")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),n("p",[t._v("Vous allez relancer le serveur en tapant dans le terminal:")]),t._v(" "),t._m(22),n("p",[t._v("Testez les liens pour comprendre le fonctionnement.")]),t._v(" "),n("p",[t._v("Et là: mais la sidebar alors ??? Elle est toujours bloquée avec la configuration du début !!!")])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ajouter-quelques-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajouter-quelques-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Ajouter quelques détails...")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#restructurer-encore-son-projet"}},[this._v("Restructurer (encore..) son projet")])]),s("li",[s("a",{attrs:{href:"#ajouter-la-navbar"}},[this._v("Ajouter la navbar")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"restructurer-encore-son-projet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restructurer-encore-son-projet","aria-hidden":"true"}},[this._v("#")]),this._v(" Restructurer (encore..) son projet")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Nous allons structurer notre dossier "),s("code",[this._v("/docs/")]),this._v(" pour y mettre notre contenu, puis utiliser notre fichier "),s("code",[this._v("config.js")]),this._v(" pour gérer le rendu.")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("cours\n"),n("ul",[n("li",[t._v("chapitre 1: Les tables d'addition\n"),n("ul",[n("li",[t._v("Page 1: la table de 1")]),t._v(" "),n("li",[t._v("Page 2: la table de 2")])])]),t._v(" "),n("li",[t._v("chapitre 2: Les tables de multiplication\n"),n("ul",[n("li",[t._v("Une seule page avec plusieurs tables")])])])])]),t._v(" "),n("li",[t._v("exercices\n"),n("ul",[n("li",[t._v("Une seule page avec plusieurs exercices, et l'affichage à la demande de la solution !")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("Dans le dossier "),n("code",[t._v("/docs/")]),t._v(" nous allons créer deux dossiers: "),n("code",[t._v("/cours/")]),t._v(" et "),n("code",[t._v("/exercices/")]),t._v(".\nDans le dossier "),n("code",[t._v("/docs/cours/")]),t._v(" nous allons créer un fichier "),n("code",[t._v("README.md")]),t._v(". Ces fichiers sont les points d'entrée de chaque dossier.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("// ./docs/cours/README.md\n"),s("span",{attrs:{class:"token title important"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("#")]),this._v(" Cours")]),this._v("\n\nNous allons voir les tables d'addition et de multiplication ...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Toujours dans le dossier "),s("code",[this._v("/docs/cours/")]),this._v(", nous allons créer les dossier "),s("code",[this._v("addition")]),this._v(" et "),s("code",[this._v("multiplication")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Dans le dossier "),s("code",[this._v("/docs/cours/addition/")]),this._v(" nous allons créer les fichiers "),s("code",[this._v("table1.md")]),this._v(" puis "),s("code",[this._v("table2.md")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("// .docs/cours/addition/table1.md\n"),s("span",{attrs:{class:"token title important"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("#")]),this._v(" La table de 1")]),this._v("\n1+1=2\n\n1+2=3\n\n...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("// .docs/cours/addition/table2.md\n"),s("span",{attrs:{class:"token title important"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("#")]),this._v(" La table de 2")]),this._v("\n2+1=3\n\n2+2=4\n\n...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Dans le dossier "),s("code",[this._v("/docs/cours/multiplication/")]),this._v(" nous allons créer le fichier "),s("code",[this._v("tables-multiplication.md")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("// .docs/cours/multiplication/tables-multiplications.md\n"),n("span",{attrs:{class:"token title important"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Les tables de multiplication")]),t._v("\n"),n("span",{attrs:{class:"token title important"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" La table de 1")]),t._v("\n1*1=1\n\n1*2=2\n\n...\n"),n("span",{attrs:{class:"token title important"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" La table de 2")]),t._v("\n2*1=2\n\n2*2=4\n\n...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Dans le dossier "),s("code",[this._v("/docs/exercices/")]),this._v(" nous allons créer un fichier "),s("code",[this._v("README.md")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[this._v("// .docs/exercices/README.md\n"),s("span",{attrs:{class:"token title important"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("#")]),this._v(" Quelques exercices")]),this._v("\n...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ajouter-la-navbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajouter-la-navbar","aria-hidden":"true"}},[this._v("#")]),this._v(" Ajouter la navbar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("un lien vers la page d'accueil")]),this._v(" "),s("li",[this._v("un lien vers la page d'exercices")]),this._v(" "),s("li",[this._v('un "menu déroulant" vers la page d\'accueil des cours, vers les additions et les multiplications')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Tout va se passer dans le fichier "),s("code",[this._v("config.js")]),this._v(".")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("      nav"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Accueil'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Exercices'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/exercices/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Cours'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          items"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Accueil Cours'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Additions'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            items"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'table de 1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addition/table1.md'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'table de 2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addition/table2.md'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Multiplications'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/multiplication/tables-multiplication.md'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Pour bien voir comment tout ceci fonctionne, nous allons l'injecter dans "),s("code",[this._v("config.js")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    themeConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sidebar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nav"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Accueil'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Exercices'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/exercices/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Cours'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          items"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Accueil Cours'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Additions'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            items"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'table de 1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addtion/table1.md'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'table de 2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addtion/table2.md'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Multiplications'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/multiplication/tables-multiplication.md'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Pratique")]),this._v(" "),s("p",[this._v("Vous pouvez bien sûr copier coller le code, mais essayez de le taper directement dans VS Code pour voir la complétion automatique, et surtout commencer à coder par vous-même")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("vuepress dev\n")])])])}],!1,null,null,null);e.options.__file="config2.md";s.default=e.exports}}]);