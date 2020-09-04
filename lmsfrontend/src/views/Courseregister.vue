<template>
    <div class="courseregister">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
        <main id="main" class="jumbotron">
       <Section class="sec1">
           <div class="h1-box"></div>
           <h1>Business </h1>
           <h1>Analysis</h1>
           <div class="secText">
               <p>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa id ut dolorem accusantium placeat, quidem at nam, molestiae enim exercitationem earum harum cum beatae aliquam illum architecto quia. Earum?
               </p>
           </div>
       </Section>
       <Section class="sec2">
           <div class="enroll">
               <div class="enrollText">
                   <p>You've enrolled on this course! </p>
               </div>
               <div class="enroll-btn">
                 <router-link :to = "{ name:'Courseconfirm' }" exact class="btn btn-lg btn-primary">Register</router-link>
               </div>
               <div class="enroll-list">
                   <div class="enroll-icon"><i class="fas fa-list-alt"></i> 8 Lessons</div>
                   <div class="enroll-icon"><i class="fab fa-youtube-square"></i> 50 Videos</div>
                   <div class="enroll-icon"><i class="fa fa-clock"></i> 72 Hours</div>
               </div>
           </div>

       </Section>
       <Section class="sec1"></Section>
    </main>
    <Section class=" container card-box">
        <hr>

        <div class="card-deck mb-3 text-center">
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
    </Section>

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

<style scoped>
.sidebar{
  position: fixed;
  z-index: 2;
}

.dashnav{
  position: static;
  z-index: 1;
}

#main{
    background-color: #3B3B3B;
    display:inline-block;
    margin: 0 auto;
    /* text-align: center;
     */
     
}

#main Section{
    width: 50%;
    /* display: inline-block; */
    float: left;
    margin: 0 auto;
    padding:60px 0 0 100px;
    text-justify: auto;
}

#main .sec1{
    color:white;
}

#main h1{
    font-weight: 900;
    /* color: green; */

}

#main .secText{
    text-align: justify;
    /* margin: 200 0 0 0; */
    

}
/* section 2 */
.enroll{
    margin: 0 auto;
    width:300px;
    padding:30px;
    background-color: white;
}

.enroll-btn button{
    background-color: #0E9CF5;
    text-align: center;
    color: white;
    padding:10px;
    width: 100%;
    offset: 0;
}

.enroll-list{
    padding: 20px 0 0 0;
}

.card-box{
   padding: 60px;
}
.cardd{
    /* height: 250;
    width: 250; */
    padding: 80px 0;
}
</style>