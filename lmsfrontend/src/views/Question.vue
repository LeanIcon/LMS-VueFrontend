<template>
 <div class="question-page">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>

    <div class="question">
        <div class="main_container card">
            <div class="inner"><p class="question-item">{{ currentIndex }}. {{ practice_test.practice_test.quiz.question_set[currentIndex].label }}</p>
                <div class="items">
                    <div class="pick" v-for="answerData in practice_test.practice_test.quiz.question_set[currentIndex].answer_set" :key="answerData.id">
                        <input type="radio" :value="answerData.id" class="answer" name="choice"><span class="checkmark">{{ answerData.label }}</span>                    
                    </div>
                </div>
            </div>
            <div v-if="!finished">
                <button class="btn" @click="handler">Next</button>
            </div>
            <div v-else>
                <button class="btn">Submit</button>
            </div>
            <div class="bar-limit"></div>
            <div class="progress-bar"></div>
        </div>
    </div>
<!-- 
    <div class="question">
        <div class="main_container card"  v-for="quizData in practice_test.practice_test.quiz.question_set" :key="quizData.id">
            <div class="inner"><p>{{quizData.id}}. {{ quizData.label }}</p>
                <div class="items">
                    <div class="pick" v-for="answerData in quizData.answer_set" :key="answerData.id">
                        <input type="radio" class="answer" :name="`choice${quizData.id}`"><span class="checkmark">{{ answerData.label }}</span>                    
                    </div>
                </div>
            </div>            
        </div>
        <button class="btn" type="submit">Next</button>
    </div> -->
    <!-- <p>quiz</p> -->
    
  </div>
  
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
// import { getAPI } from "../utils/axios-api";

export default {
// @ is an alias to /src
    name: 'Dashboard',
    data () {
        return{
            currentIndex: 0,
            finished: false,
            quizTaker: '',
            question: '',
            answer: '',
            // quiz: practice_test.quiz,
        }
    },

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

        // created: function(){
            // }
            

        submitAnswer: function sendResponse(){
            this.$store.dispatch('sendResponse', {
                quizTaker: this.quizTaker,
                question: this.question,
                answer: this.answer,
            }).then(({ status }) => {
                console.log('answer sent')
                console.log(status)
            }).catch(err=>{
                console.log(err)
            })
        },

        moveNext: function nextQuestion(){
            if (this.currentIndex >= 40) {
                //submit form
                this.currentIndex += 1; 
                console.log('questions finished')
                this.finished = true

                this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
                this.answer = document.querySelector('input[name="choice"]:checked').value
                this.question = this.practice_test.practice_test.quiz.question_set[this.currentIndex].id
            
               } else {
                this.currentIndex += 1; 
                console.log(document.querySelector('input[name="choice"]:checked').value)

                this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
                this.answer = document.querySelector('input[name="choice"]:checked').value
                this.question = this.practice_test.practice_test.quiz.question_set[this.currentIndex].id
                
            }
        },
        handler: function(){
            this.moveNext();
            this.submitAnswer();
        }


    },
    // get data from store **pass the action name**
    mounted(){
        const slug = this.$route.params.slug;
        this.getPracticeTest(slug);  
    },
}
</script>





<style scoped>
.question-page{
    position: absolute;
    background-color: #EDEDED;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.question{
    padding-top: 10%;
    margin: 0 auto;
    margin-left: 80px;
    height: 50rem;
}

.question-item{
    font-size: 18px;
    /* font-weight: ; */
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
    margin: 10rem 20em 0 20em;
    margin: auto;
}

.card{
    /*border:groove;*/
    width:70%;
    height: 60%;
    border-radius: 0px;
    border-color: none;
}

.progress-bar{
    width: 10%;
    height: 6px;
    background-color: rgba(195,0,12,1);
    position: absolute;
    bottom: 0;
}

.bar-limit{
    width: 100%;
    height: 6px;
    background-color: rgba(255, 0, 0, 0.267);
    position: absolute;
    bottom: 0;
}

.inner{
    margin: 3rem;
    font-size: 15px;
}

.btn{
    border: none;
    background-color: rgb(0, 124, 195); 
    text-decoration: none;
    width: 20%;
    color: #fff;
    height: 2rem;
    outline: none;
    border-radius: 0px; 
    position: absolute;  
    right: 40px;
    bottom: 40px;   
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