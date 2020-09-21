<template>
 <div class="home">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
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
    </div>
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
.main-body{
    padding-left: 30px;
    padding-right: 30px;
}

.main-body h3{
    font-weight: 700;
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
    border: round;
    margin: 10rem 20em 0 20em;
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
    border: none;
    background-color: rgb(0, 124, 195); 
    text-decoration: none;
    width: 20%;
    color: #fff;
    margin-bottom: 2rem;
    height: 2rem;        
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
    height: 100%;
}

</style>