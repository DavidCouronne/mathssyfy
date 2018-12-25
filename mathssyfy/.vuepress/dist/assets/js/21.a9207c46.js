(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{196:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("ClientOnly",[a("ButtonBackToTop")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),a("p",[t._v("et")]),t._v(" "),t._m(6),a("p",[t._v("Si vous avez suivi le tuto jusqu'ici, votre fichier config.js devrait ressembler à ça:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("p",[t._v("Maths en ligne: "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msqrt",[a("mrow",[a("mn",[t._v("2")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\sqrt{2}")])],1)],1)],1),t._m(10)])]),t._v(" "),a("p",[t._v("Maths centrés:")]),t._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("lim")]),a("mrow",[a("mi",[t._v("x")]),a("mo",[t._v("→")]),a("mo",[t._v("+")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∞")])],1)],1),a("mfrac",[a("mrow",[a("msup",[a("mi",[t._v("e")]),a("mi",[t._v("x")])],1)],1),a("mrow",[a("mi",[t._v("x")])],1)],1),a("mo",[t._v("=")]),a("mo",[t._v("+")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("∞")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty\n")])],1)],1)],1),t._m(11)])])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"utiliser-katex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utiliser-katex","aria-hidden":"true"}},[this._v("#")]),this._v(" Utiliser katex")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Avertissement")]),this._v(" "),s("p",[this._v("Nous allons utiliser le plugin markdown-it-katex, basé sur katex, qui permet d'utiliser une syntaxe équivalente à LaTeX dans les fichiers Markdown.")]),this._v(" "),s("p",[this._v('Mais ce n\'est pas du "vrai" LaTeX !')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installer-markdown-it-katex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installer-markdown-it-katex","aria-hidden":"true"}},[this._v("#")]),this._v(" Installer markdown-it-katex")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-console extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yarn add markdown-it-katex\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Dans le fichier "),s("code",[this._v("config.js")]),this._v(", nous avons deux paramètres à ajouter:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-katex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("   \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylesheet"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  navbar et sidebar...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" md "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-katex'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"latex-et-katex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex-et-katex","aria-hidden":"true"}},[this._v("#")]),this._v(" LaTeX et katex")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[this._v("Maths en ligne: $\\sqrt{2}$\n\nMaths centrés: \n$$\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$$\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.9072200000000001em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1.04em","vertical-align":"-0.13277999999999995em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"sqrt mord"},[s("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.06722000000000006em"}},[s("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[this._v("√")])]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"1em"}},[this._v("​")])]),s("span",{staticClass:"mord textstyle cramped"},[s("span",{staticClass:"mord mathrm"},[this._v("2")])])]),s("span",{staticStyle:{top:"-0.8272200000000001em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"1em"}},[this._v("​")])]),s("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"1em"}},[this._v("​")])]),this._v("​")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.341392em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.099723em","vertical-align":"-0.758331em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.6em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")]),a("span",{staticClass:"mrel"},[t._v("→")]),a("span",{staticClass:"mord"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("∞")])])])]),a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",[a("span",{staticClass:"mop"},[t._v("lim")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("e")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("x")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v("∞")])])])}],!1,null,null,null);n.options.__file="katex.md";s.default=n.exports}}]);