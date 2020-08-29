<template>
  <div id="app">
      <div id="nav">
           <Navbar></Navbar>
      </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  component:{
	Navbar
  },
  }
</script>

<style lang="scss">

</style>
