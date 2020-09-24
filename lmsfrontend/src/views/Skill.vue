<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
    <div class="skillpage">
       <Section class=" container card-box">
        <hr>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="@/assets/download.png" alt="Card image cap">
            <div class="card-body shadow-sm cardd">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
            <div class="card-body shadow-sm cardd">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        
        <!-- <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm cardd">
                <div class="card-body">
                    <button class="btn btn-lg btn-primary">Add new Course</button>
                </div>
            </div>
            <div class="card mb-4 shadow-sm cardd">
                <div class="card-body">
                    <button class="btn btn-lg btn-primary">Add new Course</button>
                </div>

            </div>
            <div class="card mb-4 shadow-sm cardd">
                <div class="card-body">
                    <button class="btn btn-lg btn-primary">Add new Course</button>
                </div>
            </div>
        </div>
 -->

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

.skillpage{
  position: absolute;
    padding-top: 3rem;
    margin: 0 auto;
    height: 100%;
}

Section{
    width: 100%;
    /* display: inline-block; */
    float: left;
    margin: 0 auto;
    padding:50px 0 0 100px;
    text-justify: auto;
}

.card{
  display: inline-block;
  margin-left: 50px;
}




</style>