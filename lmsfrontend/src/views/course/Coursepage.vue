<template>
        <div class="coursepage">
            <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>
        <div class="csidebar">
          <Coursesidebar></Coursesidebar>
        </div>
        <div class="feedb">
          <Feedbackbutton></Feedbackbutton>
        </div>


        <div class="main-body">               
            <main id="main">
                <HamburgerSlide></HamburgerSlide>
                <div class="main-header">
                    <div class="header-text"> <h2>Learn Business Analysis</h2></div>
                </div>
                
                <div class="main-body">
                   
                </div>
                <div class=" video-div" id="playButton4">
                        
                <video controls controlsList="nodownload" >
                    <source src="https://res.cloudinary.com/littlms/video/upload/v1599179549/2020-08-19_Design_Thinking_Prototype_md1oep.mp4">

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
                <button class="btn btn-lg btn-primary" v-on:click="alertDisplay">Next</button>
                
                
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
import Feedbackbutton from '@/components/Feedbackbutton.vue'

export default {
    name: 'Coursepage',

    components:{
        Dashboardnavbar,
        Coursesidebar,
        HamburgerSlide,
        Feedbackbutton
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

       },
        alertDisplay() {
          // Adding an input method from SweetAlert 2 automatically binds an input form.
        this.$swal({
          imageUrl: 'https://res.cloudinary.com/littlms/image/upload/v1602066152/CONGRATULATIONS_ge2nbe.gif',
          imageHeight: 200,
          imageWith: 400,
          title: 'You just completed a module!',
          timer: 2000,
          type: 'info',
          imageAlt: 'image',
          showConfirmButton: false
         
                }).then(
            function () {},
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
        //console.log('I was closed by the timer')
        }
          
    

        })
        // Select elements here
        

                
      },
    //     swal({
    //         imageUrl: 'https://placeholder.pics/svg/300x1500',
    //         imageHeight: 1500,
    //         imageAlt: 'A tall image'
    // });
    }
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
    padding-left: 4rem;
    padding-right: 30px;
}

#main{
    transition: margin-left .5s;
    padding: 16px;
    padding-left: 4rem;
}

.header-text h2{
    font-weight: 100;
    color: grey;
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

