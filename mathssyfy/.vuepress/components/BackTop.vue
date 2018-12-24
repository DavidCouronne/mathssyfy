<template>
  <div>
    <v-fab-transition>
      <v-btn
        v-show="isVisible"
        @click="scrollToTop"
        color="#72cda4"
        key="keyboard_arrow_up"
        v-model="fab"
        dark
        fab
        fixed
        bottom
        right
        outline
      >
        Test
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
export default {
  data: () => ({
    isVisible: false,
    positiony: 0,
  }),
  methods: {
    scrollFunction() {
      this.postiony = window.scrollY;
      if (this.postiony > 20) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
    scrollToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
  },
  created() {
    window.addEventListener('scroll', this.scrollFunction);
  },
};
</script>
