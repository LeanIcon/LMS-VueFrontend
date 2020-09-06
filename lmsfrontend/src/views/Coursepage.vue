<template>
        <div class="coursepage">
            <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>

        <div class="main-body">               
            
            <div id="mySideBar" class="sidebar">
                <div class="sidebar-header">
                    <div class="header-text">
                        <h3 class="bar-title">Course Overview</h3>
                    </div>
                </div>
            
            
                <div class="mySideBarMenuItem"><a href="#"  data-toggle="collapse" data-target="#submenu-1">+  Course Introduction</a>
                    <hr>
                    <ul id="submenu-1" class="collapse side-nav">
                        <li><a href="#"><i></i>- Introduction</a></li>
                        <li><a href="#"><i></i>- Requirements</a></li>
                    </ul>
                </div>

                <div class="mySideBarMenuItem"><a href="#"  data-toggle="collapse" data-target="#submenu-2">+  Market Analysis</a>
                    <hr>
                    <ul id="submenu-2" class="collapse side-nav">
                        <li><a href="#"><i></i>- Estimation</a></li>
                        <li><a href="#"><i></i>- Regression</a></li>
                        <li><a href="#"><i></i>- Linear Optimization</a></li>
                        <li><a href="#"><i></i>- Dynamic Optimization</a></li>
                    </ul>
                </div>

                <div class="mySideBarMenuItem"><a href="#"  data-toggle="collapse" data-target="#submenu-3">+  Assessment</a>
                    <hr>
                    <ul id="submenu-3" class="collapse side-nav">
                        <li><a href="#"><i></i>- Quiz</a></li>
                        <li><a href="#"><i></i>- Course Recap</a></li>
                        <li><a href="#"><i></i>- Your Next Step</a></li>
                    </ul>
                </div>
            </div>

            <main id="main">
                <div class="main-header">
                    <div class="header-icon"><span style="font-size: 30px; cursor: pointer;" v-if="navToggle" v-on:click="openNav">&#9776;</span></div>
                    <div class="header-icon"><span style="font-size: 30px; cursor: pointer;" v-if="!navToggle" v-on:click="closeNav">&#9776;</span></div>
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

export default {
    name: 'Coursepage',
  components:{
      Dashboardnavbar,
  },
    data () {
    return {
        navToggle: true,
        }
    },
   methods:{
    // When the user clicks on div, open the popup

    
    openNav: function openNav(){
    document.getElementById("mySideBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.navToggle = false
    },

    closeNav: function closeNav(){
    document.getElementById("mySideBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.navToggle = true
  
  }
}
};  
    (function () {
        ('[data-toggle="tooltip"]').tooltip();
        (".side-nav .collapse").on("hide.bs.collapse", function () {
            (this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
        });
        ('.side-nav .collapse').on("show.bs.collapse", function () {
            (this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
        });
    })  
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
.sidebar{
    height: 100%;
    color: white;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #C3000C;
    overflow-x: hidden;
    transition: 0.5s;
    pad: 60px;
    font:lato;
}


#main{
    transition: margin-left .5s;
    padding: 16px;
}
.sidebar a{
    /* padding: 8px 8px 8px 32px; */
    text-decoration: none;
    font-size: 16px;
    color: white;
    display: block;
    transition: 0.3s;

}

hr{
    background-color: white;
    opacity: 0.5;
}
.mySideBarMenuItem{
    padding: 0 30px;
}

.mySideBarMenuItem:focus{
    border: none;
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
}
.course2-btn{
    padding:30px 0;
}
.x-btn a{
    font-size: 25px;
}
.collapse > li > a{
    text-decoration: none;
}

.collapse > li, .side-nav > li{
    list-style: none;
}

.side-nav li a:hover,
.side-nav li a:focus {
    outline: none;
    color: rgba(195,0,12,1) !important;
    background-color: #fff;
}

.side-nav>li>ul {
    padding: 0;
    border-bottom: 1px rgba(0,0,0,.3) solid;
}

.side-nav>li>ul>li>a {
    display: block;
    padding: 10px 15px 10px 38px;
    text-decoration: none;
    /*color: #999;*/
    color: #fff;    
}
.welcome-text{
    text-align: justify;
}

</style>

