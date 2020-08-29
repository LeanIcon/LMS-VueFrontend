<template>
  <div class="about">
    <Navbar></Navbar>
      <h1>About Page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'About',
  components :{
    Navbar
  },
  }

</script>
