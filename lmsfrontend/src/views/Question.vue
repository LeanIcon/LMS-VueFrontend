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
            <div v-if="!finished">
                <div class="inner"><p class="question-item noselect">{{ currentIndex }}. {{ practice_test.practice_test.quiz.question_set[currentIndex].label }}</p>
                    <div class="items">
                        <div class="pick" v-for="answerData in practice_test.practice_test.quiz.question_set[currentIndex].answer_set" :key="answerData.id">
                            <input type="radio" :value="answerData.id" class="answer" name="choice"><span class="checkmark noselect">{{ answerData.label }}</span>                    
                        </div>
                    </div>
                </div>
                <button class="btn" @click="handler">Next</button>
            </div>
            <div v-else>
                <div class="inner"><p class="question-item noselect">You've successfully completed <b>{{ results.quiz.quiztakers_set.name }} </b></p>
                    <div class="items">
                        <p>40 set questions</p>
                        <p><b>{{ (results.quiz.quiztakers_set.score / 40) * 100 }}</b>% answered correctly</p>
                        <p>Your result: {{ results.quiz.quiztakers_set.score }} of 40</p>
                    </div>
                    <router-link tag="a"  :to="{ name:'Skill' }" exact>
                        Back to quiz page
                    </router-link>
                </div>
                <!-- <a href="">Back to quiz page</a> -->

                <button class="btn" @click="handler">Retake Quiz</button>
            </div>
            <!-- <div v-else>
                <button class="btn" @click="submitAnswer">Submit</button>
            </div> -->
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
import { getAPI } from "../utils/axios-api";
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

const token = localStorage.getItem("access_token");

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
            results: null,
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
          ...mapActions("practice_test", ["getPracticeTest"], "saveAnswer", "submitAnswer"),
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

          submitAnswer(){
            const slug = this.$route.params.slug
            getAPI
                .post(`/quizzes/${slug}/submit/`, {
                    headers: { Authorization: `Bearer ${token}` },
                    quiztaker: this.quizTaker,
                    question: this.question,
                    answer: this.answer
                })
                .then(({status}) => {
                    console.log('testing from line:87')
                    console.log(slug)
                    if (status == 200) {
                    console.log(status);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Check data not reading ref: actions.js >> course");
                    console.log(slug)
                });
          },

          getResults(){
            const slug = this.$route.params.slug
            console.log('get all results this is slug:' + slug)
            getAPI
                .get(`/quizzes/${slug}/`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    this.results = res.data
                })
                .catch((err) => {
                    console.log(err);
                });
          },

        moveNext: function nextQuestion(){
            // var progressBar = document.body.getElementsByClassName('bar-limit');
            // console.log(progressBar)

            if (this.currentIndex == 38) {
                //submit form
                // this.currentIndex += 1;
                this.cur_progress = (this.currentIndex/38)*100
                // this.cur_progress = 100
                console.log(this.cur_progress)
                console.log('questions finished')

                this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
                this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                this.question = this.practice_test.practice_test.quiz.question_set[this.currentIndex].id
                this.submitAnswer()
                this.finished = true
                this.getResults()
            } else {
                this.currentIndex += 1;
                console.log(document.querySelector('input[name="choice"]:checked').value)
                this.cur_progress = (this.currentIndex/38)*100
                console.log(this.cur_progress)

                this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
                this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                this.question = this.practice_test.practice_test.quiz.question_set[this.currentIndex].id
            }

            // console.log(this.$store)
            
            console.log('this is test id' + this.practice_test.practice_test.quiz.name);

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
    overflow-x: hidden;
    height: 100%;
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
  right: 4rem;
  width: 100px;
  height: 100px;
  top: 4rem;

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
    // width: 300px;
    // height: 300px;
    top: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    left: 15%;
  }
}


</style>