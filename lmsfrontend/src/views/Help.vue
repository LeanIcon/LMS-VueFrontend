<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
		<div class="skillpage">
			<Section class="">
                
			</Section>
		</div>
        
    </div>    
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'

export default {
// @ is an alias to /src
  name: 'Dashboard',

  components:{
    Sidebar,
    Dashboardnavbar,
  },
}
</script>

<style scoped>
.sidebar{
  position: fixed;
  z-index: 2;
}
.dashnav{
  position: static;
  z-index: 1;
}

Section{
    width: 100%;
    /* display: inline-block; */
    float: left;
    margin: 0 auto;
    padding:50px 0 0 100px;
    text-justify: auto;
}

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,700&display=swap');


html{
    font-size: 62.5%;
    /* font-family: 'Lato', sans-serif; */
}

</style>