<template>
   <div class="page" oncontextmenu="return false;">
      <div class="info-bar px-5">
         <router-link :to="{ name:'Skill'}" tag="a" exact class="btn-link"> <i class="back--btn fa fa-arrow-left"></i> Quiz</router-link>

         <p class="m_timeout">{{formattedTimeLeft}}</p>
      </div>
      <div class="quiz-body">
         <!-- {{test}} -->
         <div class="quiz-card-container">
            <div class="quiz-timer">
               <h2 class="time-int">{{formattedTimeLeft}}</h2>
               <p class="time-label">Time Remaining</p>
            </div>
            <div class="question-main">
               <div class="bar-limit"></div>
               <div class="progress-bar"  v-bind:style="{ width: cur_progress + '%' }"></div>
               <div class="" v-if="!finished && windowWidth >= 760">
                  <div style="display: flex; flex-direction: row;">
                     <p class="mr-1">{{currentIndex+1}}. </p>
                     <span v-html="`${test.quiz.question_set[questions[currentIndex]].label}`"></span>
                  </div>
                  <div class="items mt-2">
                     <div class="pick" v-for="answerData in test.quiz.question_set[questions[currentIndex]].answer_set" :key="answerData.id">
                        <input type="radio" @change="onChange($event)" :value="answerData.id" :id="answerData.id" class="answer" name="choice" :checked="answerDetail[currentIndex] ==  answerData.id"><label class="checkmark noselect" :for="answerData.id">{{ answerData.label }}</label>
                        <!-- <p>{{ $route.params.slug }}</p> -->
                     </div>
                  </div>
                  <div class="btn-container">
                     <button class="btn-nxt" @click="handler">Next</button>
                     <button class="bck" @click="moveBack" v-if="currentIndex >= 1">Back</button>
                  </div>
               </div>
               <div v-if="finished" class="w-100">
                  <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="m_question"  v-if="!finished && windowWidth <= 765">
         <div class="m_question_body">
            <div class="questions_label">
               <p class="question_no mr-1">{{currentIndex+1}}.</p>
               <p v-html="`${test.quiz.question_set[questions[currentIndex]].label}`"></p>
            </div>
            <div class="m_choices">
               <label class="answer-label ripple" v-for="answerData in test.quiz.question_set[questions[currentIndex]].answer_set" :key="answerData.id" :for="answerData.id">
                  <input type="radio" @change="onChange($event)" :value="answerData.id" :id="answerData.id" name="choice" :checked="answerDetail[currentIndex] ==  answerData.id">
                  <p class="answer">{{ answerData.label }}</p>
               </label>
            </div>
         </div>
         <div class="progress-bar_m"></div>
         <div class="progress-bar_curr" v-bind:style="{width: cur_progress + '%'}"></div>
         <div class="m_controls d-flex px-2">
            <p class="m_progress">{{currentIndex+1}}/40 left</p>
            <button class="btn-nxt" @click="handler">Next</button>
         </div>
      </div>
      <div class="bg"></div>
   </div>
</template>



<script>
   import { getAPI } from "../../utils/axios-api";
   const token = localStorage.getItem("access_token");

   const TIME_LIMIT = 3600;
   export default {
      name: 'Test',
      data () {
         return{
               finished: false,
               timePassed: 0,
               timerInterval: null,
               currentIndex: 0,
               quizTaker: '',
               question: '',
               answer: '',
               cur_progress: 0,
               results: 0,
               selectedAnswer: false,
               answerDetail: {},
               score: 0,
               questions: [],
               questionPointer: 0,
               quizStarted: false,
               quizCancelled: false,
               quiz_slug: '',
               test: '',
               window: '',
               windowWidth: window.innerWidth,
         }
      },
      
      watch: {
         timeLeft(newValue) {
               if (newValue === 0) {
                  this.onTimesUp();
               }
         },

         windowWidth(newWidth) {
            this.width = `${newWidth}`;
         }
      },

      computed:{
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
      },
      
      created(){
         this.questions = Array.from(Array(40).keys());
         this.randomize()
         window.addEventListener("resize", this.resizeHandler);
         this.startTimer();
         
      },
      

      methods:{ 
         frontendSec(){
            document.onkeydown = function(e) {
               if(event.keyCode == 123) {
                  return false;
               }
               if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                  return false;
               }
               if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                  return false;
               }
               if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                  return false;
               }
               if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                  return false;
               }
            }
         },

         resizeHandler() {
            this.windowWidth =  window.innerWidth
         },

         shuffleQuestions(array) {
            for (let i = array.length - 1; i > 0; i--) {
               const j = Math.floor(Math.random() * (i + 1));
               const temp = array[i];
               this.$set(array, i, array[j]);
               this.$set(array, j, temp);
            }
         },

         onChange(event) {
            var optionText = event.target.value;
            console.log(optionText)
         }, 

         onTimesUp() {
            clearInterval(this.timerInterval);
            this.submitAnswer()
         },  

         startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
         },

         randomize() {
               this.shuffleQuestions(this.questions);
         },

         sendResponse(){
               this.$store.dispatch('saveAnswer', {
                  quizTaker: this.quizTaker,
                  question: this.question,
                  answer: this.answer,
               }).then(({ status }) => {
                  console.log(status)
               }).catch(err=>{
                  console.log(err)
                  this.$notification.error("You have an unstable internet connection, Please retry the quiz \n Your previous answers won't be saved", { infiniteTimer: false, position: 'bottomRight', showCloseIcn: true});                
                  // this.showWarnMsg()
                  clearInterval(this.timerInterval);
                  setTimeout(this.getResults, 3000);
                  this.finished = true
         
               })
         },

         getQuestions(){
            getAPI
               .get(`/quizzes/${this.quiz_slug}/`, {
                  headers: { Authorization: `Bearer ${token}` },
               })
               .then((response) => {
                  this.test = response.data
                  this.$loading(false)
               })
               .catch((err) => {
                  console.log(err);
            });
         },

         submitAnswer(){
               // this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
               getAPI
                  .post(`/quizzes/${this.quiz_slug}/submit/`, {
                     headers: { Authorization: `Bearer ${token}` },
                     quiztaker: this.quizTaker,
                     question: this.question,
                     answer: this.answer
                  })
                  .then(res => {
                     clearInterval(this.timerInterval);
                     if (res.status == 200) {
                           this.finished = true
                           this.results = res.data
                           this.$loading(true)
                           this.resultsPage(this.results)
                     }
                  })
                  .catch((err) => {
                     console.log(err)
                     this.finished = true
               });
         },

         resultsPage(results){
            this.$router.push({
                  name: 'QuizResults',
                  params: { slug: this.quiz_slug, results: results}
            });
         },

         moveNext: function nextQuestion(){
               if (this.currentIndex == 39) {
                  this.cur_progress = ((this.currentIndex+1)/39)*100
                  this.quizTaker = this.test.quiz.quiztakers_set.id
                  this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                  this.question = this.test.quiz.question_set[this.questions[this.currentIndex]].id
                  this.finished = true
                  this.submitAnswer()
                  this.$loading(true)
               } else {
                  this.cur_progress = ((this.currentIndex+1)/39)*100
                  this.quizTaker = this.test.quiz.quiztakers_set.id
                  this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                  this.question = this.test.quiz.question_set[this.questions[this.currentIndex]].id
                  this.answerDetail[this.currentIndex] = this.answer;
                  this.currentIndex += 1;
               }
         },
         
         moveBack: function prevQuestion(){
               if (this.currentIndex == 39) {
                  this.cur_progress = ((this.currentIndex+1)/39)*100
                  this.quizTaker = this.test.quiz.quiztakers_set.id
                  this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                  this.question = this.test.quiz.question_set[this.questions[this.currentIndex]].id
               } else {
                  this.currentIndex -= 1;
                  this.cur_progress = ((this.currentIndex+1)/39)*100
                  this.quizTaker = this.test.quiz.quiztakers_set.id
                  this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
                  this.question = this.test.quiz.question_set[this.questions[this.currentIndex]].id
               }
         },

         handler: function(){
               this.moveNext();
               this.sendResponse();
         },

         checkparams(){
            if (!this.$route.params.slug) {
               this.$loading(false)
               this.$router.push("/skill"); // redirect to quiz page
            } else {
               this.quiz_slug = this.$route.params.slug
               this.getQuestions()
               // this.getPracticeTest(this.quiz_slug);
            }
         },
      },

      destroyed() {
         window.removeEventListener("resize", this.resizeHandler);
      },

      beforeMount(){
         this.$loading(true)
         this.checkparams()
         // this.frontendSec()
      }
   }
</script>




<style scoped>
.page{
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   -o-user-select: none;
   user-select: none;
}

.tawk-min-container{
   display: none !important;
}
.m_timeout{
   display: none;
}

.m_question{
   display: none;
}

.progress-bar{
   width: 10%;
   height: 6px;
   background-color: #0E9CF5;
   position: absolute;
   bottom: 0;
   margin-top: -1rem;
   top: -1%;
   margin-bottom: 2.5rem;
}

.bar-limit{
   width: 100%;
   height: 6px;
   background-color: #C4C3C3;
   position: absolute;
   bottom: 0;
   margin-top: -1rem;
   top: -1%;
   margin-bottom: 2.5rem;
}

.btn-nxt{
   border: none;
   background-color: #0f57f1;
   text-decoration: none;
   width: 20%;
   color: #fff;
   height: 2.3rem;
   outline: none;
   border-radius: 0px;
   position: absolute;
   margin: auto;
   right: 0;
}

.bck{
   border: none;
   background-color: #0f57f1;
   text-decoration: none;
   width: 20%;
   color: #fff;
   height: 2.3rem;
   outline: none;
   border-radius: 0px;
   position: absolute;
   margin: auto;
   left: 0;
}

.btn-container{
   position: relative;
   margin: 3rem 1rem;
   margin-bottom: 4.5rem;
}


.answer{
   margin-right: 1rem;
}

.pick{
   height: 25px;
}

.pick:hover{
   cursor: pointer;
}

.pick>li{
   list-style: none;
}

.question-main{
   position: relative;
   top: -3rem;
   width: 90%;
   margin: auto;
}

.time-label{
   text-align: center;
   font-size: 12px;
   font-weight: 700;
}

.time-int{
   line-height: -4px;
   margin: auto;
   text-align: center;
   font-weight: 700;
   margin-bottom: 0px;
}

.quiz-body{
   background: linear-gradient(0deg, #3b3b3bb4, #3b3b3bb4), url('../../assets/images/poster-main.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
}

.info-bar{
   position: fixed;
   top: 0;
   height: 3rem;
   background-color: #D1D1D1;
   width: 100%;
   display: flex;
   align-items: center;
   place-content: flex-end;
   z-index: 10;
}

.back--btn{
   font-size: 13px;
}

.btn-link{
   color: #3B3B3B;
   margin: auto;
   font-size: 15px;
   font-weight: 600;
   width: 50%;
   text-align: left;
   text-decoration: none;
}

.quiz-body{
   background-color: #3B3B3B;
   min-height: 100vh;
   /* width: 100vw; */
   margin: auto;
   display: flex;
}

.quiz-card-container{
   background-color: #fefefe;
   width: 65%;
   /* height: 65%; */
   margin: auto;
   margin-top: 9rem;
   margin-bottom: 9rem;
}

.quiz-timer{
   position: relative;
   right: -100%;
   height: 6rem;
   width: 7rem;
   background-color: #C4C3C3;
   /* top: 80%; */
   display: flex;
   flex-direction: column;
}

input[type='radio']:after {
   width: 13px;
   height: 13px;
   border-radius: 15px;
   top: -3.2px;
   left: 1.3px;
   position: relative;
   background-color: #ffffff;
   content: '';
   display: inline-block;
   visibility: visible;
   border: 2px solid white;
}

input[type='radio']:checked:after {
   width: 13px;
   height: 13px;
   border-radius: 15px;
   top: -3.4px;
   left: 1.35px;
   position: relative;
   background-color: #4d6c94b9;
   content: '';
   display: inline-block;
   visibility: visible;
   border: 2px solid white;
}

.spinner-border{
   text-align: center;
}

   
@media screen and (max-width: 754px) {

   .page{
      background-color: rgba(243, 243, 243, 0.959);
      height: 100vh;
      width: 100vw;
      position: absolute;
   }

   .m_question,
   .m_timeout{
      display: initial;
   }

   .btn-link{
      font-size: 18px;
   }

   .m_timeout{
      font-size: 18px;
      font-weight: 600;
      margin: auto;
      margin-right: 1.2rem;
      font-weight: 600;
      width: 50%;
      text-align: right;
   }

   .sidebar{
      display: none;
   }

   .mobile-nav{
      display: initial;
   }

   .answer-label{
      width: 100%;
      background-color: #fefefe;
      min-height: 3rem;
      margin-bottom: 20px;
      padding: 10px 20px;
      border-radius: 8px;
      display: flex;
      filter: drop-shadow(0px 1px 3px rgba(90, 85, 85, 0.1));
   }

   .answer-label input, 
   .answer-label p {
      margin: auto 0;
      margin-right: 10px;
   }

   /* .answer-label p{
      max-width: 98%;
   } */

   .m_question_body{
      margin: 20px 10px;
      margin-top: 4.5rem;
   }

   .m_choices{
      padding-bottom: 10rem;
      height: 100%;
   }

   .quiz-body{
      display: none;
   }

   .questions_label{
      display: flex;
      flex-direction: row;
   }

   .m_controls{
      background-color: rgb(255, 255, 255);
      color: #fff;
      height: 3.2rem;
      width: 100%;
      place-content: space-between;
      position: fixed;
      bottom: 0;
      border-top: 1px solid rgba(82, 82, 82, 0);
      padding-top: 10px;
   }
   
   .info-bar{
      padding: 0 2rem !important;
   }

   .progress-bar_m{
      position: fixed;
      bottom: 3.1rem;
      height: 5px; 
      background-color: #0f57f11c; 
      width: 100%;
   }

   .progress-bar_curr{
      position: fixed;
      bottom: 3.1rem;
      height: 5px; 
      background-color: #0151ffb2;
   }

   .m_progress{
      font-size: 18px;
      color: #6d6b6b;
   }

   .btn-nxt{
      height: 3rem;
      margin: 0;
      position: initial;
      border-radius: 10px;
      height: 2rem;
   }

   .ripple {
      background-position: center;
      transition: background 0.8s;
   }
   .ripple:hover {
      background: #1b080809 radial-gradient(linear, transparent 1%, #1b080809 1%) center/15000%;
   }
   .ripple:active {
      background-color: #1b080809;
      background-size: 100%;
      transition: background 0s;
   }

   .bg{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(243, 243, 243, 0.959);
      z-index: -9;
   }
}
</style>

<style>

@media print {
    html, body {
       display: none;  /* hide whole page */
    }
}

@media screen and (max-width: 754px) {
   span img,
   p img,
   img{
      max-width: 100% !important;
      height: auto;
   }
}
</style>