<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div class="solution" slot="header">{{ title }}</div>
      <v-card>
        <v-card-text><slot></slot></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
export default {
    props: {
        title: {
            default: 'Solution'
        }
    }
}
</script>

<style scoped>
.solution{
    color: #72cda4;
}
</style>

