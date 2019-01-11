<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      
      <v-card>
        <p>hello</p>
<markdown>
# Un titre

## UN sous titre

blablblablbal

hop
</markdown>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Markdown from '@mathssyfy/plugin-markdown'
export default {
  components: {
    Markdown
  },
}
</script>





