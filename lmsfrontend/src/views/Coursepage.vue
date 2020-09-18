<template>
        <div class="coursepage">
            <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
        <div class="csidebar">
          <Coursesidebar></Coursesidebar>
        </div>


        <div class="main-body">               
 
            <main id="main">
                <div class="main-header">
                    <HamburgerSlide></HamburgerSlide>
                    <div class="header-text"> <h2>Learn Business Analysis</h2></div>
                </div>
                
                <div class="main-body">
                   
                </div>
                <div class=" video-div">
                        
                <video controls src="https://res.cloudinary.com/littlms/video/upload/v1599179549/2020-08-19_Design_Thinking_Prototype_md1oep.mp4">

                </video>
                <div class="welcome-text">
                    <h3>Welcome to the Business Analysis Course</h3>
                    <h5>Hear BA's share their perspective before you start in the field</h5>
              
          </div>
        <div class="course2-btn">
                <button class="btn btn-lg btn-primary">Next</button>
            </div>
                </div>  
            </main >
        </div>    
   </div> 
</template>


<script type="text/javascript">
import Dashboardnavbar from '@/components/Dashboardnavbar.vue'
import Coursesidebar from '@/components/Coursesidebar.vue' 
import HamburgerSlide from '@/components/HamburgerSlide.vue'
export default {
    name: 'Coursepage',

    components:{
        Dashboardnavbar,
        Coursesidebar,
        HamburgerSlide,
    },
}

 </script>   
<style scoped>
.bar-title{
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.dashnav{
  position: static;
  z-index: 0;
}
.main-body{
    padding-top: 3rem;
    background-color: #EDEDED;
}

#main{
    transition: margin-left .5s;
    padding: 16px;
}

.header-text h2{
    font-weight: 100;
    color: grey;
}

.main-body{
    padding-left: 30px;
    padding-right: 30px;
}
.main-body h3{
    font-weight: 700;
}
.video-div{
    background-color: #F0F5F7;
    padding:50px;
    /* height: 480px; */

}
video{
    height: 70%;
    width: 70%;
}
.course2-btn{
    padding:30px 0;
}
.welcome-text{
    text-align: justify;
}

</style>

