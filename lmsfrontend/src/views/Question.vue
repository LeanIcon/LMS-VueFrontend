<template>
 <div class="question-page">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>

    <div class="question">
        <div class="main_container card"  v-for="quizData in practice_test.practice_test.quiz.question_set" :key="quizData.id">
            <div class="inner">
                <!-- <h3 class="header">Complete the task</h3> -->
                <!-- <p>Usually, BPM is represented in diagrammatic way where processes, decisions and ________ are represented as a sequential workflow </p> -->
                <p>{{ quizData.label }}</p>
                <div class="items">
                    <div class="pick" v-for="answerData in quizData.answer_set" :key="answerData.id">
                            <input type="radio" class="answer" name="choice"><span class="checkmark">{{ answerData.label }}</span>
                    
                    </div>
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
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
// @ is an alias to /src
    name: 'Dashboard',

    components:{
        Sidebar,
        Dashboardnavbar,
    },

  
    computed: {
        ...mapState(["practice_test"])
    },
    
    methods: {
        ...mapActions("practice_test", ["getPracticeTest"]),
        // console.log()

        practice_test(){
            // Do something
        }
    },
    // get data from store **pass the action name**
    mounted(){
        this.getPracticeTest();  
    },
}
</script>





<style scoped>
.question-page{
    position: absolute;
    background-color: #EDEDED;
    height: 100vh;
    width: 100vw;
}
.question{
    padding-top: 5rem;
    margin: 0 auto;
}

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


</style>