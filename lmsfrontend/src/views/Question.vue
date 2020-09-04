<template>
 <div class="home">
 <div class="side">
    <Sidebar></Sidebar>
    <div class="dashnav">
        <Dashboardnavbar></Dashboardnavbar>
    </div>
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
import Sidebar from '@/components/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboardnavbar.vue'

export default {
  name: 'Question',
  components :{
    Sidebar,
    Dashboardnavbar
  },
}

</script>
<style scoped>
    html,body{
    margin: 0px;
    padding: 0px;
    height: 100vh;
    background-color: rgb(210, 224, 230);
    margin-top: 10rem;
    
        /* overflow: hidden; */
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
        margin-top: 5rem;
        margin-left:6em;
        background-color: rgb(210, 224, 230);
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