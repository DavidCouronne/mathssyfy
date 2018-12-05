<template>
<div>
<textarea v-model="formula" cols="30" rows="10"></textarea>
  <vue-mathjax :formula="formula"></vue-mathjax>
  <p>
        <strong>Exercice 1  6 points</strong><br>
<textarea v-model="test" cols="30" rows="10"></textarea>
<p> {{ test }} </p>
<strong>Commun  à tous les candidats</strong><br>

</div>
</template>

<script>

import { VueMathjax } from 'vue-mathjax'
export default {
  components: {
    'vue-mathjax': VueMathjax
  },
  name: 'HelloWorld',
  data () {
    return {
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$ La température du four est exprimée en degré Celsius ( &deg; C).<br> !!!',
      msg: 'Welcome/> to Your Vue.js App',
      test: ""
    }
  }
}
</script>