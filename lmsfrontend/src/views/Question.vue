<template>
 <div class="question-page">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>

    <div class="question">
        <!-- <div v-if="!finished">
            <questionTimer ref='timer'>
            </questionTimer>
        </div> -->

        <questionCard ref='question'>
        </questionCard>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import questionCard from '@/components/quiz/questionCard.vue'
// import questionTimer from '@/components/quiz/questionTimer.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
// import VueNotifications from 'vue-notifications';

// import { getAPI } from "../utils/axios-api";
// document.addEventListener("visibilitychange", this.tabSwitch)

export default {
// @ is an alias to /src
    name: 'Dashboard',
    data () {
        return{
            answer: 0,
            finished: false,
        }
    },

    components:{
        Sidebar,
        Dashboardnavbar,
        questionCard,
        // questionTimer,
    },


    // disabled tabswitch functionality 
    // destroyed() {
    //     window.removeEventListener("visibilitychange", this.tabSwitch );
    // },
    
    // created() {
    //     window.addEventListener("visibilitychange", this.tabSwitch)
    // }, 
    
    methods: {
        handler: function(){
            this.moveNext();
            this.sendResponse();
        },
        cancelQuiz: function(){
            this.$swal({
                title: 'Your Quiz has been cancelled!',
                text: "You switched between tabs. Please retry!",
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Retake Quiz'
            }).then((result) => {
                if (result.value) {
                    this.$router.push({ name: 'Skill' })
                }
            })
        },


        // tabSwitch: function(){
        //     if (document.visibilityState != "visible" && this.$refs.question.finished == false) {
        //         console.log(this.$refs.question.finished)
        //         // this.$notification.new("Your Quiz has been cancelled! \n you switched tabs. Please retry!", { infiniteTimer: false, position: 'bottomRight', showCloseIcn: true, timer: 10});     
        //         this.cancelQuiz()
        //         this.$notification.error("Your Quiz has been cancelled! \n Reason: You switched between tabs. Please retry!", { infiniteTimer: false, position: 'topRight', showCloseIcn: true, timer: 10});     
        //         this.quizCancelled = true 
        //         this.finished = true 
        //         console.log('====================//Debug//=================')
        //         console.log(this.finished)
        //         console.log('====================//Debug switch//=================')
        //         // this.submitAnswer()
        //         clearInterval(this.$refs.question.timerInterval);
        //         this.$refs.question.onTimesUp();
        //         // this.$refs.question.getResults();
        //         // this.$router.push({ name: 'Dashboard' })      
        //     }

        // }
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

</style>