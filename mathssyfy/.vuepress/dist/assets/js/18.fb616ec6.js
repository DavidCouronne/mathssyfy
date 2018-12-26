(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{193:function(e,t,s){"use strict";s.r(t);var r=s(1),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("ClientOnly",[s("ButtonBackToTop")],1),e._v(" "),s("p",[e._v('Dans cette partie, nous allons voir comment créer un site avec Vuepress à partir de zéro ("from scratch"). Les explications détaillées sur la syntaxe des codes ou le pourquoi du parce que seront vues dans d\'autres parties.')]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),s("p",[e._v("Enregistrer le fichier avec CTRL+S")]),e._v(" "),s("p",[e._v('Pour tester si tout fonctionne bien, nous allons ouvrir un terminal dans Visual Studio Code avec le raccourci CTRL+ù (ou dans le menu "view" puis Terminal)')]),e._v(" "),s("p",[e._v("Dans le terminal taper:")]),e._v(" "),e._m(4),e._m(5),e._v(" "),s("p",[e._v("Vous devriez voir le texte s'afficher. Bien sûr pour le moment, ce n'est pas très joli, mais cela permet de tester si tout fonctionne bien.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Vous devez avoir la structure suivante:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"demarrage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demarrage","aria-hidden":"true"}},[this._v("#")]),this._v(" Démarrage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creation-du-projet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creation-du-projet","aria-hidden":"true"}},[this._v("#")]),this._v(" Création du projet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Pour commencer, nous allons créer un dossier pour contenir le projet.\nPar exemple "),t("code",[this._v("vuepress-test")]),this._v('\nPlacer-vous dans le dossier (vide pour le moment), puis clic-droit et "Open with Code".\nVisual Studio Code s\'ouvre 😃\nCréer un nouveau fichier nommé '),t("code",[this._v("README.md")]),this._v("\nDans ce fichier, vous pouvez taper (ou copier-coller) le code suivant:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" Ma première page")]),e._v("\nQuelques tests\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("##")]),e._v(" Une première partie")]),e._v("\nVoici une première partie\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("##")]),e._v(" Une deuxième partie")]),e._v("\nEt une deuxième partie\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[this._v("vuepress dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Après un certain temps, un server de développement est créé. Ouvrir votre navigateur Internet préféré puis taper "),t("code",[this._v("localhost:8080")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"structurer-son-dossier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structurer-son-dossier","aria-hidden":"true"}},[this._v("#")]),this._v(" Structurer son dossier")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Vuepress suit le principe "),t("strong",[this._v('"Convention est mieux que configuration"')]),this._v(" ("),t("strong",[this._v('"Convention is better than configuration"')]),this._v("), nous allons donc créer les dossier suivant (toujours dans Visual Studio Code):")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("un dossier "),s("code",[e._v(".vuepress")])]),e._v(" "),s("li",[e._v("un dossier "),s("code",[e._v("docs")])]),e._v(" "),s("li",[e._v("dans le dossier "),s("code",[e._v(".vuepress")]),e._v(" vous allez créer un fichier "),s("code",[e._v("config.js")])]),e._v(" "),s("li",[e._v("dans le dossier "),s("code",[e._v("docs")]),e._v("vous aller créer un fichier "),s("code",[e._v("README.md")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("vuepress-test")]),this._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(".\n├ docs\n├── README.md\n├ .vuepress\n├── config.js\n├ README.md\n")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("Attention aux noms de fichiers et de dossiers")]),e._v(" "),s("p",[e._v("Les noms de fichiers et de dossiers ne doivent pas:")]),e._v(" "),s("ul",[s("li",[e._v("contenir d'espace")]),e._v(" "),s("li",[e._v("contenir de caractères spéciaux ou de lettres accentuées")]),e._v(" "),s("li",[e._v('bien respecter la "casse", c\'est-à-dire les majuscules et les minuscules.')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"quelques-explications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quelques-explications","aria-hidden":"true"}},[this._v("#")]),this._v(" Quelques explications")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Le dossier "),s("code",[e._v("docs")]),e._v(" va contenir le contenu du site. En fait on pourrait le nommer comme on veut, ou presque.")]),e._v(" "),s("li",[e._v("le dossier "),s("code",[e._v(".vuepress")]),e._v(" est un dossier qui est lu automatiquement par Vuepress. Il contient en particulier le fichier "),s("code",[e._v("config.js")]),e._v(" que nous allons commencer à manipuler dans la prochaine partie.")])])}],!1,null,null,null);i.options.__file="demarrer.md";t.default=i.exports}}]);