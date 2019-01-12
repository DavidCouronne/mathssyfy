!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PluginMarkdown=e():t.PluginMarkdown=e()}(global,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){t.exports=require("markdown-it")},function(t,e){t.exports=require("markdown-it-emoji")},function(t,e){t.exports=require("markdown-it-sub")},function(t,e){t.exports=require("markdown-it-sup")},function(t,e){t.exports=require("markdown-it-footnote")},function(t,e){t.exports=require("markdown-it-deflist")},function(t,e){t.exports=require("markdown-it-abbr")},function(t,e){t.exports=require("markdown-it-ins")},function(t,e){t.exports=require("markdown-it-mark")},function(t,e){t.exports=require("markdown-it-toc-and-anchor")},function(t,e){t.exports=require("markdown-it-katex-newcommand")},function(t,e){t.exports=require("markdown-it-task-lists")},function(t,e){t.exports=require("markdown-it-container")},function(t,e){t.exports=require("markdown-it-prism")},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),s=n.n(i),a=n(2),u=n.n(a),l=n(3),c=n.n(l),d=n(4),h=n.n(d),f=n(5),p=n.n(f),m=n(6),y=n.n(m),k=n(7),b=n.n(k),g=n(8),L=n.n(g),x=n(9),w=n.n(x),v=n(10),S=n.n(v),q=n(11),A=n.n(q),C=n(12),j=n.n(C),B=n(13),O=n.n(B),P=(n(14),{md:new o.a,template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:t=>t},postrender:{type:Function,default:t=>t}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(t){this.md=(new o.a).use(u.a).use(c.a).use(h.a).use(p.a).use(y.a).use(b.a).use(L.a).use(O.a).use(S.a,{throwOnError:!1,errorColor:" #cc0000"}).use(A.a,{enabled:this.taskLists}).use(...$("tip","ASTUCE")).use(...$("attention","ATTENTION")).use(...$("danger","DANGER")),this.emoji&&this.md.use(s.a),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=(()=>`<table class="${this.tableClass}">\n`);let e=this.md.renderer.rules.link_open||function(t,e,n,r,o){return o.renderToken(t,e,n)};this.md.renderer.rules.link_open=((t,n,r,o,i)=>(Object.keys(this.anchorAttributes).map(e=>{let r=t[n].attrIndex(e),o=this.anchorAttributes[e];r<0?t[n].attrPush([e,o]):t[n].attrs[r][1]=o}),e(t,n,r,o,i))),this.toc&&this.md.use(w.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(t,e,n)=>{n&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=n),this.$emit("toc-rendered",n))}});let n=this.show?this.md.render(this.prerender(this.sourceData)):"";return n=this.postrender(n),this.$emit("rendered",n),t("div",{domProps:{innerHTML:n}})},beforeMount(){if(this.$slots.default){this.sourceData="";for(let t of this.$slots.default)this.sourceData+=t.text}this.$watch("source",()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()}),this.watches.forEach(t=>{this.$watch(t,()=>{this.$forceUpdate()})})}});function $(t,e){return[j.a,t,{render(n,r){const o=n[r],i=o.info.trim().slice(t.length).trim();return 1===o.nesting?`<div class="${t} custom-block"><p class="custom-block-title">${i||e}</p>\n`:"</div>\n"}}]}function M(t){t.component("plugin-markdown",P)}n.d(e,"install",function(){return M})}])});