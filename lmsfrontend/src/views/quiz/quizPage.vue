<template>
   <div class="page">
      <div class="info-bar px-5">
         <router-link :to="{ name:'Skill'}" tag="a" exact class="btn-link"> <i class="back--btn fa fa-arrow-left"></i> Quiz</router-link>
      </div>
      <div class="quiz-body">
         <div class="quiz-card-container">
            <div class="quiz-timer">
               <h2 class="time-int">{{formattedTimeLeft}}</h2>
               <p class="time-label">Time Remaining</p>
            </div>
            <div class="question-main">
               <div class="bar-limit"></div>
               <div class="progress-bar"  v-bind:style="{ width: cur_progress + '%' }"></div>
               <div class="" v-if="!finished">
                  {{ currentIndex }}. {{ practice_test.practice_test.quiz.question_set[questions[currentIndex]].label }}
                  <div class="items mt-4">
                     <div class="pick" v-for="answerData in practice_test.practice_test.quiz.question_set[questions[currentIndex]].answer_set" :key="answerData.id">
                        <input type="radio" @change="onChange($event)" :value="answerData.id" :id="answerData.id" class="answer" name="choice" :checked="answerDetail[currentIndex] ==  answerData.id"><span class="checkmark noselect">{{ answerData.label }}</span>     
                        <!-- <p>{{ $route.params.slug }}</p>                -->
                     </div>
                  </div>
                  <div class="btn-container">
                     <button class="btn-nxt" @click="handler">Next</button>
                     <button class="bck" @click="moveBack" v-if="currentIndex >= 1">Back</button>
                  </div>
               </div>
               <div v-else>
                  <div class="items">
                     <p>40 set questions</p>
                     <p><b>{{ (results.quiztaker_set.score / 40) * 100 }}</b>% answered correctly</p>
                     <p>Your result: {{ results.quiztaker_set.score }} of 40</p>
                     <div v-if="(results.quiztaker_set.score / 40) * 100 >= 65">
                        <p>You reached the pass mark</p>
                     </div>
                     <div v-if="(results.quiztaker_set.score / 40) * 100 <= 65">
                        <p>You failed the test please retry</p>
                     </div>
                     <p>Not happy with your score? <a :href="$router.resolve({ name:'Test', params: {slug: $route.params.slug} }).href">Retake</a></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { getAPI } from "../../utils/axios-api";
const token = localStorage.getItem("access_token");

const TIME_LIMIT = 60;
export default {
   name: 'Test',
   data () {
      return{
            finished: false,
            timePassed: 0,
            timerInterval: null,
            currentIndex: 1,
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
            // practice_test: 'test',
      }
   },
   
   watch: {
      timeLeft(newValue) {
            if (newValue === 0) {
               this.onTimesUp();
            }
      }
   },

   computed:{
      ...mapState(["practice_test"]),

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
   },
   

   methods:{ 
      shuffleQuestions(array) {
         for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            this.$set(array, i, array[j]);
            this.$set(array, j, temp);
         }
      },   
      
      ...mapActions("practice_test", ["getPracticeTest"], "saveAnswer", "submitAnswer"),

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

      submitAnswer(){
            const slug = this.$route.params.slug
            // this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
            getAPI
               .post(`/quizzes/${slug}/submit/`, {
                  headers: { Authorization: `Bearer ${token}` },
                  quiztaker: this.quizTaker,
                  question: this.question,
                  answer: this.answer
               })
               .then(res => {
                  clearInterval(this.timerInterval);
                  if (res.status == 200) {
                        console.log(status);
                        this.finished = true
                        this.results = res.data
                  }
               })
               .catch((err) => {
                  console.log(err)
                  this.finished = true
            });
      },

      getResults(){
            const slug = this.$route.params.slug
            getAPI
               .get(`/quizzes/${slug}/`, {
                  headers: { Authorization: `Bearer ${token}` },
               })
               .then((res) => {
                  this.results = res.data
                  this.score = this.results.quiztakers_set.score
               })
               .catch((err) => {
                  console.log(err);
               });
      },

      moveNext: function nextQuestion(){
            if (this.currentIndex == 39) {
               this.cur_progress = (this.currentIndex/39)*100
               this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
               this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
               this.question = this.practice_test.practice_test.quiz.question_set[this.questions[this.currentIndex]].id
               this.submitAnswer()
               this.finished = true
               this.getResults()
            } else {
               this.cur_progress = (this.currentIndex/39)*100
               this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
               this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
               this.question = this.practice_test.practice_test.quiz.question_set[this.questions[this.currentIndex]].id
               this.answerDetail[this.currentIndex] = this.answer;
               this.currentIndex += 1;
            }
      },

      
      moveBack: function prevQuestion(){
            if (this.currentIndex == 39) {
               this.cur_progress = (this.currentIndex/39)*100
               this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
               this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
               this.question = this.practice_test.practice_test.quiz.question_set[this.questions[this.currentIndex]].id
            } else {
               this.currentIndex -= 1;
               this.cur_progress = (this.currentIndex/39)*100
               this.quizTaker = this.practice_test.practice_test.quiz.quiztakers_set.id
               this.answer = parseInt(document.querySelector('input[name="choice"]:checked').value, 10)
               this.question = this.practice_test.practice_test.quiz.question_set[this.questions[this.currentIndex]].id
            }
      },

      handler: function(){
            this.moveNext();
            this.sendResponse();
      },


   },

   mounted(){
      this.startTimer();
      const slug = this.$route.params.slug;
      this.getPracticeTest(slug);      
   },
}
</script>




<style scoped>
.progress-bar{
   width: 10%;
   height: 6px;
   background-color: #0E9CF5;
   position: absolute;
   bottom: 0;
   margin-top: -1rem;
   top: -10%;
   margin-bottom: 2.5rem;
}

.bar-limit{
   width: 100%;
   height: 6px;
   background-color: #C4C3C3;
   position: absolute;
   bottom: 0;
   margin-top: -1rem;
   top: -10%;
   margin-bottom: 2.5rem;
}

.btn-nxt{
   border: none;
   background-color: #007cc3;
   text-decoration: none;
   width: 20%;
   color: #fff;
   height: 2rem;
   outline: none;
   border-radius: 0px;
   position: absolute;
   margin: auto;
   right: 0;
}

.bck{
   border: none;
   background-color: #007cc3;
   text-decoration: none;
   width: 20%;
   color: #fff;
   height: 2rem;
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
}

.back--btn{
   font-size: 15px;
}

.btn-link{
   color: #3B3B3B;
   margin: auto;
   font-size: 19px;
   font-weight: 600;
   width: 100%;
   text-align: right;
   text-decoration: none;
}

.quiz-body{
   background-color: #3B3B3B;
   height: 100vh;
   width: 100vw;
   margin: auto;
   display: flex;
}

.quiz-card-container{
   background-color: #fefefe;
   width: 65%;
   /* height: 65%; */
   margin: auto;
   /* padding: 1rem; */
}

.quiz-timer{
   position: relative;
   right: -100%;
   height: 6rem;
   width: 7rem;
   background-color: #C4C3C3;
   top: 80%;
   display: flex;
   flex-direction: column;
}
</style>