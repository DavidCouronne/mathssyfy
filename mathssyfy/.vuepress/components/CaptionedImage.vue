<template>
<div>
  <p>{{ src }}</p>
  <figure>
    
    <img src="scr" alt=""/>
    <figcaption>Legenda: {{ caption }} - {{ src }}</figcaption>
  </figure>
  </div>
</template>

<script>
export default {
  props: ['src', 'caption'],
  computed: {
    imagesrc () {
      return './images/' + this.src
    }
  }
}
</script>