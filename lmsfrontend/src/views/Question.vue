<template>
 <div class="question-page">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>

    <div class="question">
        <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
  </div>

        <div class="main_container card">
            <div class="inner"><p class="question-item noselect">{{ currentIndex }}. {{ practice_test.practice_test.quiz.question_set[currentIndex].label }}</p>
                <div class="items">
                    <div class="pick" v-for="answerData in practice_test.practice_test.quiz.question_set[currentIndex].answer_set" :key="answerData.id">
                        <input type="radio" :value="answerData.id" class="answer" name="choice"><span class="checkmark noselect">{{ answerData.label }}</span>                    
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
            <div class="progress-bar"  v-bind:style="{ width: cur_progress + '%' }"></div>
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

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES ={
      info:{
        color: "green"
      },
      warning:{
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert:{
        color: "red",
        threshold: ALERT_THRESHOLD
      }
};

const TIME_LIMIT = 3600;

export default {
// @ is an alias to /src
    name: 'Dashboard',
    data () {
        return{
            currentIndex: 0,
            finished: false,
            quizTaker: '',
            question: '',
            answer: 0,
            timePassed: 0,
            timerInterval: null,
            cur_progress: 0,
            // quiz: practice_test.quiz,
        }
    },

    components:{
        Sidebar,
        Dashboardnavbar,
    },
    computed: {
        ...mapState(["practice_test"]),
        circleDasharray() {
              return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
        },
        formattedTimeLeft() {
              const timeLeft = this.timeLeft;
              const minutes = Math.floor(timeLeft / 60);
              let seconds = timeLeft % 60;

              if (seconds < 10) {
                seconds = `0${seconds}`;
              }

              return `${minutes}:${seconds}`;
        },

        timeLeft() {
             return TIME_LIMIT - this.timePassed;
        },

        timeFraction() {
              const rawTimeFraction = this.timeLeft / TIME_LIMIT;
              return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        },

        remainingPathColor() {
              const { alert, warning, info } = COLOR_CODES;

            if (this.timeLeft <= alert.threshold) {
                return alert.color;
            }else if (this.timeLeft <= warning.threshold) {
                return warning.color;
            } else {
                return info.color;
            }
        }
    },

    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                this.onTimesUp();
            }
        }
    },
    
    methods: {
          ...mapActions("practice_test", ["getPracticeTest"], "saveAnswer"),
          onTimesUp() {
            clearInterval(this.timerInterval);
          },

          startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
          },

          sendResponse(){
              this.$store.dispatch('saveAnswer', {
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
            // var progressBar = document.body.getElementsByClassName('bar-limit');
            // console.log(progressBar)

            if (this.currentIndex >= 40) {
                //submit form
                this.currentIndex += 1;
                this.cur_progress = (this.currentIndex/40)*100
                console.log(this.cur_progress)
                console.log('questions finished')
                this.finished = true

                this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
                this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                this.question = this.practice_test.practice_test.quiz.question_set[this.currentIndex].id
            } else {
                this.currentIndex += 1;
                console.log(document.querySelector('input[name="choice"]:checked').value)
                this.cur_progress = (this.currentIndex/40)*100
                console.log(this.cur_progress)

                this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
                this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                this.question = this.practice_test.practice_test.quiz.question_set[this.currentIndex].id
            }

            console.log(this.$store)
        },
        handler: function(){
            this.moveNext();
            this.sendResponse();
        }


    },
    // get data from store **pass the action name**
    mounted(){
        const slug = this.$route.params.slug;
        this.getPracticeTest(slug);
        this.startTimer();
    },
}
</script>





<style scoped lang="scss">
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
    // width: 0%;
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

.noselect { 
  -webkit-touch-callout: none; /* iOS Safari */ 
    -webkit-user-select: none; /* Safari */ 
     -khtml-user-select: none; /* Konqueror HTML */ 
       -moz-user-select: none; /* Firefox */ 
        -ms-user-select: none; /* Internet Explorer/Edge */ 
            user-select: none; /* Non-prefixed version, currently 
                                  supported by Chrome and Opera */ 
} 


.base-timer {
  position: absolute;
  right: 250px;
  width: 100px;
  height: 100px;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: fixed;
    // width: 300px;
    bottom: 0px;
    // height: 300px;
    // top: 2px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    font-size: 48px;
  }
}


</style>