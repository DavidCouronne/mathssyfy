# @mathssyfy/plugin-markdown
Plugin markdown-it for katex rendering with ability to add global \newcommand 

## Installation

```bash
yarn add @mathssyfy/plugin-markdown
# or
npm install @mathssyfy/plugin-markdown --save
```

Add CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css" integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y" crossorigin="anonymous">
```
## Basic

```js
const md = require('markdown-it')();
const mkn = require('@mathssyfy/plugin-markdown');
md.use(mkn);
```
 ## Add newcommands

Example:
 ```js
const md = require('markdown-it')();
const mynewcommands = '\\displaystyle'
    +'\\newcommand{\\vect}[1]{\\overrightarrow{#1}}'
    +'\\newcommand{\\Oij}{\\left(O;\\vect{i};\\vect{j}\\right)}';
const mkn = require('@mathssyfy/plugin-markdown');
md.use(mkn, {
      "newcommands": mynewcommands
    });
 ```

 ## Katex

 [Katex supported functions](https://katex.org/docs/supported.html)

 The native katex syntax also is supported:

 ```js
const mymacroskatex = {
    "\\f": "f(#1)"
};
const mynewcommands = '\\newcommand{\\g}[1]{g\\left(#1\\right)}';
const mkn = require('@mathssyfy/plugin-markdown');
md.use(mkn, {
    "macros": mymacroskatex,
    "newcommands": mynewcommands
})
 ```

