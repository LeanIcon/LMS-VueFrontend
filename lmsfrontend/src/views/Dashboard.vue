<template>
    <div class="dashboard">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboardnavbar.vue'
export default {
// @ is an alias to /src
  name: 'Dashboard',
  components:{
    Sidebar,
    Dashboardnavbar,
  },
}
</script>

<style>

</style>