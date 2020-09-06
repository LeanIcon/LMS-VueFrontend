<template>
 <div class="home">
    <div class="side">
    <!-- <div class="sidebar">
        <Sidebar></Sidebar>
    </div> -->
        <div class="dashnav">
            <Dashboardnavbar></Dashboardnavbar>
        </div>
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
    </div>

    <div class="main-header">
        <div class="header-icon"><span style="font-size: 30px; cursor: pointer;" v-if="navToggle" v-on:click="openNav">&#9776;</span></div>
        <div class="header-icon"><span style="font-size: 30px; cursor: pointer;" v-if="!navToggle" v-on:click="closeNav">&#9776;</span></div>
        <div class="header-text"> <h2>Learn Business Analysis</h2></div>
    </div>

    <div class="question">
        <div class="main_container card">
            <div class="inner">
                <h3 class="header">Complete the task</h3>
                <p>Usually, BPM is represented in diagrammatic way where processes, decisions and ________ are represented as a sequential workflow </p>
                <div class="items">
                    <ul class="pick">

                        <li><label class="container">
                            <input type="radio" class="answer"><span class="checkmark">Information</span>
                        </label>
                        </li>
                        <li><label class="container">
                            <input type="radio" class="answer"><span class="checkmark">Analysis</span>
                        </label>
                        </li>
                        <li><label class="container">
                            <input type="radio" class="answer"><span class="checkmark">Brainstorming</span>
                        </label>
                        </li>
                    
                    </ul>
                </div>
                <button class="btn" type="submit">
                    Submit
                </button>
            </div>
            
        </div>
        <div class="main_container card">
            <div class="inner">
                <h3 class="header">Complete the task</h3>
                <p>Usually, BPM is represented in diagrammatic way where processes, decisions and ________ are represented as a sequential workflow </p>
                <div class="items">
                    <ul class="pick">

                        <li><label class="container">
                            <input type="radio" class="answer"><span class="checkmark">Information</span>
                        </label>
                        </li>
                        <li><label class="container">
                            <input type="radio" class="answer"><span class="checkmark">Analysis</span>
                        </label>
                        </li>
                        <li><label class="container">
                            <input type="radio" class="answer"><span class="checkmark">Brainstorming</span>
                        </label>
                        </li>
                    
                    </ul>
                </div>
                <button class="btn" type="submit">
                    Submit
                </button>
            </div>
            
        </div>
        <div class="main_container card">
        <div class="inner">
            <h3 class="header">Complete the task</h3>
            <p>Usually, BPM is represented in diagrammatic way where processes, decisions and ________ are represented as a sequential workflow </p>
            <div class="items">
                <ul class="pick">

                    <li><label class="container">
                        <input type="radio" class="answer"><span class="checkmark">Information</span>
                      </label>
                    </li>
                    <li><label class="container">
                        <input type="radio" class="answer"><span class="checkmark">Analysis</span>
                      </label>
                    </li>
                    <li><label class="container">
                        <input type="radio" class="answer"><span class="checkmark">Brainstorming</span>
                      </label>
                    </li>
                   
                </ul>
            </div>
            <button class="btn" type="submit">
                Submit
            </button>
        </div>   
    </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Dashboardnavbar from '@/components/Dashboardnavbar.vue'

export default {
  name: 'Question',
  components :{
    Dashboardnavbar
  },
}

</script>
<style scoped>
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


    .sidebar{
    position: fixed;
    z-index: 2;
    }

    .dashnav{
    position: static;
    z-index: 1;
    }

    .main_container{
        /*align: center;*/
        border: round;
        margin-left: 20em;
        margin-right: 20em;
        margin-top: 10rem;
        

    }
    .card{
        /*border:groove;*/
        width:50%;
        border-radius: 10px;
        border-color: none;
        margin-top: 2rem;
    }
    .inner{
        margin-left: 2rem;
        margin-right: 2rem;
        font-size: 15px;
    }

    .btn{
        border: transparent;
        background-color: rgb(0, 124, 195); 
        text-decoration: none;
        width: 20%;
        color: #fff;
        margin-bottom: 2rem;
        height: 2rem;        
    }

    .btn:hover {
    color:#fff;
    }

    .answer{
        margin-right: 1rem;
        
    }
    .pick>li{
        list-style: none;
    }

    .main_container {
        box-sizing: border-box;
    }

    .question{
        position: absolute;
        padding-top: 5rem;
        margin: 0 auto;
        background-color: #EDEDED;
        size:50px;
    }

    .side{
        position: fixed;
        z-index: 10;        
    }

    .dashnav{
        position: static;
        z-index: 1;
    }

</style>