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
            <div class="inner"><p>{{practice_test.practice_test.quiz.question_set[currentIndex].id}}. {{ practice_test.practice_test.quiz.question_set[currentIndex].label }}</p>
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

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
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
            answer: '',
            timePassed: 0,
            timerInterval: null
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
      } else if (this.timeLeft <= warning.threshold) {
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
        ...mapActions("practice_test", ["getPracticeTest"]),
        // console.log()

        // created: function(){
            // }
            onTimesUp() {
      clearInterval(this.timerInterval);
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },

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
            if (this.currentIndex >= 3) {
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
        this.startTimer();  
    },
}
</script>





<style scoped lang="scss">
.question-page{
    position: absolute;
    background-color: #EDEDED;
    height: 200%;
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
    position: absolute;
    width: 300px;
    height: 300px;
    top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
}


</style>