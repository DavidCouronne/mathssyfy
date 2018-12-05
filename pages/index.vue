<template>
  <section class="container">
    <div>
      <app-logo/>
      <vuemathjax/>
      <h1 class="title">
      mathssyfy $\def \RR { { \bf R} } $
      </h1>
      
      <h2>
        $$x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
      </h2>
      <div class="links">
        
          <nuxt-link to="/sujets"
          class="button--green">Sujets</nuxt-link>
          <nuxt-link to="maths"
          class="button--green">Tests</nuxt-link>
        
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

import vuemathjax from '~/components/vue-mathjax.vue'
export default {
  components: {
    AppLogo,
    vuemathjax
  },

}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

