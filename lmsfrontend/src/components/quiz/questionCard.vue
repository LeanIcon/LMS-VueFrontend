<template>
        <!-- ============================== -->
                <!-- Quiz Card -->
        <!-- ============================== -->
        <div class="main_container card">
            <div v-if="!finished">
                <div class="inner"><p class="question-item noselect">{{ currentIndex + 1 }}. {{ practice_test.practice_test.quiz.question_set[questions[currentIndex]].label }}</p>
                    <div class="items">
                        <div class="pick" v-for="answerData in practice_test.practice_test.quiz.question_set[questions[currentIndex]].answer_set" :key="answerData.id">
                            <input type="radio" :value="answerData.id" :id="answerData.id" class="answer" name="choice" :checked="answerDetail[currentIndex] ==  answerData.id"><span class="checkmark noselect">{{ answerData.label }}</span>     
                            <!-- <p>{{ $route.params.slug }}</p>                -->
                        </div>
                    </div>
                </div>
                <button class="btn" @click="handler">Next</button>
                <button class="bck" @click="moveBack" v-if="currentIndex >= 1">Back</button>
                 
            </div>
            <div v-else>
                <div class="inner"><p class="question-item noselect">You've successfully completed {{ practice_test.practice_test.quiz.name }}</p>
                    <div class="items">
                        <p>40 set questions</p>
                        <p><b>{{ (results.quiz.quiztakers_set.score / 40) * 100 }}</b>% answered correctly</p>
                        <p>Your result: {{ score }} of 40</p>
                        <div v-if="(results.quiz.quiztakers_set.score / 40) * 100 >= 65">
                            <p>You reached the pass mark</p>
                        </div>
                        <div v-if="(results.quiz.quiztakers_set.score / 40) * 100 <= 65">
                            <p>You failed the test please retry</p>
                        </div>
                        <p>Not happy with your score? <a :href="$router.resolve({ name:'Question', params: {slug: $route.params.slug} }).href">Retake</a></p>
                    </div>
                </div>
                <!-- <a class="btn" >Quizzes</a> -->
                <router-link class="btn" :to="{ name:'Skill'}" tag="a">Quiz</router-link>
                <!-- this.$route.params.slug -->
                <p>{{ results }}</p>
            </div>
            <!-- ======================= -->
                <!-- PROGRESS BAR -->
            <!-- ======================= -->
            <div class="bar-limit"></div>
            <div class="progress-bar"  v-bind:style="{ width: cur_progress + '%' }"></div>
        </div> 
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import { getAPI } from "../../utils/axios-api";

const token = localStorage.getItem("access_token");


export default {
    name: "questionCard",
    data () {
        return{
            currentIndex: 0,
            finished: false,
            quizTaker: '',
            question: '',
            answer: 0,
            cur_progress: 0,
            results: 0,
            selectedAnswer: false,
            answerDetail: {},
            score: 0,
            questions: [],
            questionPointer: 0,
            quizStarted: false,
            quizCancelled: false,
        }
    },

    computed: {
        ...mapState(["practice_test"]),

    },

    created(){
        this.questions = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
        this.randomize()
        // console.log(this.questions)
    },
    
    methods: {
        shuffleQuestions(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                this.$set(array, i, array[j]);
                this.$set(array, j, temp);
            }
        },

        ...mapActions("practice_test", ["getPracticeTest"], "saveAnswer", "submitAnswer"),
        onTimesUp() {
            clearInterval(this.timerInterval);
            // this.showErrorMsg()
            this.submitAnswer().then(this.getResults)
                 
        },

        randomize() {
            this.shuffleQuestions(this.questions);
            console.log(this.questions)
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
                this.$notification.error("You have an unstable internet connection, Please retry the quiz \n Your previous answers won't be saved", { infiniteTimer: false, position: 'bottomRight', showCloseIcn: true});                
                // this.showWarnMsg()
                clearInterval(this.timerInterval);
                setTimeout(this.getResults, 3000);
                this.finished = true
        
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
                    if (status == 200) {
                        console.log(status);
                        this.finished = true
                    }
                })
                .catch((err) => {
                    console.log(err);
                    console.log("Check data not reading ref: actions.js >> course");
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
                    this.score = this.results.quiz.quiztakers_set.score
                    console.log(this.results)
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        moveNext: function nextQuestion(){
            if (this.currentIndex == 39) {
                this.cur_progress = (this.currentIndex/39)*100
                console.log(this.questions)
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
                this.submitAnswer()
                this.finished = true
                this.getResults()
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

        // get data from store **pass the action name**
    mounted(){
        const slug = this.$route.params.slug;
        this.getPracticeTest(slug);
    },
    
}
</script>

<style scoped>
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
    width: 0%;
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
.bck{
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
    left: 35px;
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

.question-item{
    font-size: 18px;
    /* font-weight: ; */
}


</style>