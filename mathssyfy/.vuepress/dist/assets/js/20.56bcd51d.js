(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{196:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("BackToTop"),t._v(" "),a("p",[t._v("Le paramétrage de la sidebar va ressembler à celui de la navbar, avec quelques difficultés supplémentaires.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("C'est le cas favorable. Nous allons prendre notre page sur les multiplications et ajouter:")]),t._v(" "),t._m(2),a("p",[t._v("Relancez le serveur, puis naviguez vers la page de multiplications pour voir l'effet.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),a("p",[t._v("En fait c'est toute la partie sidebar qui a changé, le reste est identique.")]),t._v(" "),a("p",[t._v("Nous paramétrons le dossier addition avec deux pages, table1 et table2. L'ordre est important !")]),t._v(" "),a("p",[t._v("Relancez le serveur pour voir l'effet. Si tout va bien, vous verrez des liens en bas de page pour la page suivante.")])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"la-sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#la-sidebar","aria-hidden":"true"}},[this._v("#")]),this._v(" La sidebar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"si-le-document-n-a-qu-une-seule-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#si-le-document-n-a-qu-une-seule-page","aria-hidden":"true"}},[this._v("#")]),this._v(" Si le document n'a qu'une seule page")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("// ."),a("span",{attrs:{class:"token title important"}},[t._v("docs/cours/multiplication/tables-multiplications.md\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n"),a("span",{attrs:{class:"token title important"}},[t._v("sidebar: auto\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n"),a("span",{attrs:{class:"token title important"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Les tables de multiplication")]),t._v("\n"),a("span",{attrs:{class:"token title important"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" La table de 1")]),t._v("\n1*1=1\n\n1*2=2\n\n...\n"),a("span",{attrs:{class:"token title important"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" La table de 2")]),t._v("\n2*1=2\n\n2*2=4\n\n...\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"si-le-document-possede-plusieurs-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#si-le-document-possede-plusieurs-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Si le document possède plusieurs pages")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('C\'est le cas de notre "cours" sur les additions. Le paramétrage va se faire dans le fichier '),s("code",[this._v("config.js")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    themeConfig"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sidebar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addition/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'table1.md'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v("'table2.md'")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        \n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nav"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Accueil'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Exercices'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/exercices/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Cours'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          items"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Accueil Cours'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Additions'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            items"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'table de 1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addition/table1.md'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'table de 2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/addition/table2.md'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Multiplications'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/docs/cours/multiplication/tables-multiplication.md'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n")])])])}],!1,null,null,null);e.options.__file="sidebar.md";s.default=e.exports}}]);