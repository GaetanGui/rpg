<template>
  <div>
    <v-btn @click="$emit('navBarClick', index)" v-for="(titre, index) in titles" :key="index" :color="titre.color">{{titre.text}}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: { titles: Array }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>