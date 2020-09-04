<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  component:{
  Navbar,
  Sidebar
  },
}
</script>

<style lang="scss">

</style>
