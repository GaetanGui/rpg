<template>
  <v-app>
    <NavBar :titles="[ {text: 'Personnages', color: 'red'} , {text: 'Villes', color: 'green'}]"
            @navBarClick="navBarClick($event)"
    />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import {mapActions} from 'vuex'
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar},

  data: () => ({
  }),
  methods: {
    ...mapActions(['getAllTowns']),
    ...mapActions(['getAllPersos']),
    navBarClick(router) {
      if (router === 0)
        this.$router.push('/persos')
      if (router === 1)
        this.$router.push('/towns')
    }
  },
  mounted() {
    this.getAllTowns()
    this.getAllPersos()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>