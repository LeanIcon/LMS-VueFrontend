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
                <!-- <iframe
                    src="https://res.cloudinary.com/littlms/video/upload/v1599179549/2020-08-19_Design_Thinking_Prototype_md1oep.mp4"
                    width="640"
                    height="480"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowfullscreen
                    frameborder="0"
                ></iframe> -->
                <div class="welcome-text">
                    <h3>Welcome to the Business Analysis Course</h3>
                    <h5>Hear BA's share their perspective before you start in the field</h5>
              
          </div>
        <div class="course2-btn">
                <button class="btn btn-lg btn-primary">Next</button>
            </div>
        <div class="course2-btn">
                <button class="btn btn-lg feed" @click="feedbackmodal">Feedback</button>
            </div>
                </div>  
            </main >
        </div>
        
<modal name="feedback-modal">
    <form method = "post" name="feedback" id="feedback" action="#" enctype="multipart/form-data" @submit.prevent="savefeedback">
        <div class="card">
            <div class="card-header">
                feedback
            </div>
            <div class="card-body">
               <form action="" class="form" >
                   <div class="row">
                       <div class="col-lg-6 p-1">
                           <label for="">feedback Name</label>
                           <input v-model="user.username" type="text" class="form-control" >
                       </div>
                       <div class="col-lg-6 p-1">
                           <label for="manufacturerbrand">Status</label>
                            <textarea v-model="user.feedback" placeholder="Please type feedback here"></textarea>
                       </div>
                   </div>
               </form>
               <button class="btn btn-primary">SAVE</button>
            </div>
        </div>
    </form>
    </modal>
         
   </div> 
</template>


<script type="text/javascript">
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
import Coursesidebar from '@/components/Course/Coursesidebar.vue' 
import HamburgerSlide from '@/components/Course/HamburgerSlide.vue'
export default {
    name: 'Coursepage',

    components:{
        Dashboardnavbar,
        Coursesidebar,
        HamburgerSlide,
    },

    data(){
        return{
            username: '',
            feedback: ''
        }
    },

    methods:{
       feedbackmodal(){
           this.$modal.show('feedback-modal');
       } ,

       savefeedback(){

       }
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
.feed{
    position:absolute;
    right: 0;
    bottom:0;
    font-size:20px;
    border: none;
    transform: rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -o-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    transform-origin: bottom right;
}
</style>

