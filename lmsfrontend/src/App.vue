<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  component:{
	Navbar,
  Footer
  },
  }
</script>

<style lang="scss">

</style>
