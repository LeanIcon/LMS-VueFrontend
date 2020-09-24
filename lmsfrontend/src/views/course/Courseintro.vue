<template>
        <div class="courseintro">
            <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
        <div class="csidebar">
          <Coursesidebar></Coursesidebar>
        </div>

        <div class="main-body">
            
            <main id="main">
                                <main>
            <div class="main-header">
                    <HamburgerSlide></HamburgerSlide>
                    <div class="header-text"> <h2>Learn Business Analysis</h2></div>
                </div>
            </main>
                <div class="main-body">
                    <h3>Objective</h3>
                    <p>After completing this course, you would be able to understand:</p>
                    <ul>
                        <li>Basic concepts of Business Analysis</li>
                        <li>Identify business analyst activities and responsibilities</li>
                        <li>Recognize the value of business analysis</li>
                        <li>Identify examples of project team stakeholders</li> 
                        <li>Identify examples of external project stakeholders</li> 
                        <li>Recognize activities in the requirements and design cycle</li> 
                    </ul>

                    <p>
                        We have the specialized knowledge to act as a guide and lead the business through unknown or unmapped territory, to get it to its desired destination. The value of business analysis is in realization of benefits, avoidance of cost, identification of new opportunities, understanding of required capabilities and modeling the organization. Through the effective use of business analysis, we can ensure an organization realizes these benefits, ultimately improving the way they do business.                        
                    </p>

                    <div class="course2-btn">
                        <a class="btn btn-lg btn-primary" href="https://res.cloudinary.com/littlms/raw/upload/v1599331781/Questions_bank_for_BA_b4gmnb.doc">Download <i class="fa fa-download"></i></a>
                    </div>
                </div>
                <div class=" video-div">
                        
                <video controls src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4">
                </video>
                <div class="course2-btn">
                        <router-link :to = "{ name:'Coursepage' }" exact class="btn btn-lg btn-primary">Start</router-link>
 
                    </div>
                </div>    
            </main >
        </div>    
   </div> 
</template>



<script type="text/javascript">
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

<style scoped>
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
hr{
    background-color: white;
    opacity: 0.5;
}

#main .main-header div{
    display: inline-block;
    padding: 10px;
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
    margin: auto;
}

.course2-btn{
    padding:30px 0;
}

</style>

