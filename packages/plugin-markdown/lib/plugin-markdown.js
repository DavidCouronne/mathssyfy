!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PluginMarkdown=e():t.PluginMarkdown=e()}(global,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}([function(t,e){t.exports=require("markdown-it")},function(t,e){t.exports=require("markdown-it-emoji")},function(t,e){t.exports=require("markdown-it-sub")},function(t,e){t.exports=require("markdown-it-sup")},function(t,e){t.exports=require("markdown-it-footnote")},function(t,e){t.exports=require("markdown-it-deflist")},function(t,e){t.exports=require("markdown-it-abbr")},function(t,e){t.exports=require("markdown-it-ins")},function(t,e){t.exports=require("markdown-it-mark")},function(t,e){t.exports=require("markdown-it-toc-and-anchor")},function(t,e){t.exports=require("markdown-it-katex-newcommand")},function(t,e){t.exports=require("markdown-it-task-lists")},function(t,e){t.exports=require("markdown-it-container")},function(t,e){t.exports=require("markdown-it-prism")},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(1),s=r.n(i),a=r(2),u=r.n(a),l=r(3),c=r.n(l),d=r(4),h=r.n(d),f=r(5),p=r.n(f),m=r(6),y=r.n(m),k=r(7),b=r.n(k),g=r(8),L=r.n(g),x=r(9),w=r.n(x),v=r(10),S=r.n(v),q=r(11),A=r.n(q),j=r(12),C=r.n(j),B=r(13),O=r.n(B),P=(r(14),{md:new o.a,template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:t=>t},postrender:{type:Function,default:t=>t}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(t){this.md=(new o.a).use(u.a).use(c.a).use(h.a).use(p.a).use(y.a).use(b.a).use(L.a).use(O.a).use(S.a,{throwOnError:!1,errorColor:" #cc0000"}).use(A.a,{enabled:this.taskLists}).use(...$("tip","TIP")).use(...$("warning","WARNING")).use(...$("danger","WARNING")),this.emoji&&this.md.use(s.a),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=(()=>`<table class="${this.tableClass}">\n`);let e=this.md.renderer.rules.link_open||function(t,e,r,n,o){return o.renderToken(t,e,r)};this.md.renderer.rules.link_open=((t,r,n,o,i)=>(Object.keys(this.anchorAttributes).map(e=>{let n=t[r].attrIndex(e),o=this.anchorAttributes[e];n<0?t[r].attrPush([e,o]):t[r].attrs[n][1]=o}),e(t,r,n,o,i))),this.toc&&this.md.use(w.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(t,e,r)=>{r&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=r),this.$emit("toc-rendered",r))}});let r=this.show?this.md.render(this.prerender(this.sourceData)):"";return r=this.postrender(r),this.$emit("rendered",r),t("div",{domProps:{innerHTML:r}})},beforeMount(){if(this.$slots.default){this.sourceData="";for(let t of this.$slots.default)this.sourceData+=t.text}this.$watch("source",()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()}),this.watches.forEach(t=>{this.$watch(t,()=>{this.$forceUpdate()})})}});function $(t,e){return[C.a,t,{render(r,n){const o=r[n],i=o.info.trim().slice(t.length).trim();return 1===o.nesting?`<div class="${t} custom-block"><p class="custom-block-title">${i||e}</p>\n`:"</div>\n"}}]}function I(t){t.component("plugin-markdown",P)}r.d(e,"install",function(){return I})}])});