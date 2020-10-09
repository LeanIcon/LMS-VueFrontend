<template>
    <div class="lesson-page">
        <div class="dashnav">
            <Dashboardnavbar></Dashboardnavbar>
        </div>
        <div class="csidebar">
            <Coursesidebar></Coursesidebar>
        </div>

        <main id="main">
            <div class="main-header">
                <HamburgerSlide></HamburgerSlide>
                <router-view></router-view>
            </div>
        </main>
  </div>
</template>

<script>
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
import Coursesidebar from '@/components/Course/Coursesidebar.vue'
import HamburgerSlide from '@/components/Course/HamburgerSlide.vue'
export default {
    name: 'Courseintro',

    components:{
        Dashboardnavbar,
        Coursesidebar,
        HamburgerSlide,
    },
}

</script>

<style>
.dashnav{
  position: static;
  z-index: 0;
}

#main{
    transition: margin-left .5s;
    padding: 5rem;
}

</style>