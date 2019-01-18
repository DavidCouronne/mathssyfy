# `@mathssyfy/plugin-markdown`

## Description

Plugin Markdown for Nuxt or Vue

## Installation

```
yarn add @mathssyfy/plugin-markdon
```

## Usage

Pour Nuxt:

+ Dans nuxt.config.js:
  ```
    css: [
    ...
    '@mathssyfy/plugin-markdown/lib/theme.css',
    ...
  ],
    ```
+ Dans une vue:
  
 ```
<script>
import Markdown from '@mathssyfy/plugin-markdown'
export default {
  components: {
    Markdown
  },
}
</script>
 ```

 ```
<markdown>
# Un titre

blabla

...
</markdown>
 ```
Inspiré de Vuepress et de vue-markdown:

+ [Vuepress](https://vuepress.vuejs.org/)
+ [vue-markdown](https://github.com/miaolz123/vue-markdown)
