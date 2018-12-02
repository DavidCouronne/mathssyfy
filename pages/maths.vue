<template>
<div>
<textarea v-model="formula" cols="30" rows="10"></textarea>
  <vue-mathjax :formula="formula"></vue-mathjax>
  <vue-mathjax :formula="hop"></vue-mathjax>
  <p>
        <strong>Exercice 1  6 points</strong><br>

<strong>Commun  à tous les candidats</strong><br>

<br>

<em>Les parties </em> A <em>et</em>   B <em>peuvent être traitées de façon indépendante.</em><br>

<br>


Dans une usine, un four cuit des céramiques à la température de 1000 &deg;  C. À la fin de la
cuisson, il est éteint et il refroidit.<br>

<br>

On s'intéresse à la phase de refroidissement du four, qui débute dès l'instant où il est éteint.<br>


La température du four est exprimée en degré Celsius ( &deg; C).<br>
Le plan est muni d'un repère orthonormé \( \vec{u} \) .
Vérifier que. pour tout nombre réel \( t \) positif: \( d(t) = 980\left(1 - \text{e}^{- \frac{1}{5}}\right)\text{e}^{- \frac{t}{5}} \).
  </p>
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
      formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
      hop: '$\\vec{u}$',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>