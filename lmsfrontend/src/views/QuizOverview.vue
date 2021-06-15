<template>
    <div class="quizoverview page">
        <div class="page--content-container">
            <div class="ini-control">
                <div class="row-container">
                    <a @click="goback()">
                        <i class="back--btn fa fa-arrow-left"></i>
                    </a>
                    <div class="btn-beta"><p>BETA</p></div>
                </div>
            </div>
            <div class="ini-page-body">
                <div class="content-header">
                    <h1 class="header-title ini-title">
                        {{quizTitle}} <br> Skill Assessment
                    </h1>
                    <div class="header-body">
                        We rely on users to help us calibrate our skill assessments before they can be published. While this skill assessment is in beta, your performance will not be recorded and you will not get a Skill IQ.
                    </div>
                    <div class="btn-container">
                        <router-link :to="{name:'Test', params: {slug: `${quiz_id}`}}" class="btn btn--get-started" exact tag="div">Got it. Start the test</router-link>
                    </div>
                    <div class="video--player">
                        <vue-plyr>
                            <video  class="video-element" poster="@/assets/images/quizposter.jpg" src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4">
                                <source src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4" type="video/mp4" size="1080">
                            </video>
                        </vue-plyr>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
// import { mapActions } from 'vuex'
export default {
    name: "QuizOverview",
    data(){
        return{
            quizTitle: '',
            quiz_id: '',
        }
    },
    methods: {
        
        // ...mapActions("practice_test", ["getPracticeTest"], "saveAnswer", "submitAnswer"),
        goback(){
            this.$router.go(-1)
        },
        checkparams(){
            if (!this.$route.params.title) {
                this.$router.push("/skill"); // redirect to quiz page
            }
        }
    },
    computed: {
        // ...mapState(["practice_test"]),
    },
    mounted() {
        this.quizTitle = this.$route.params.title;
        this.quiz_id = this.$route.params.quiz_id;
        // this.getPracticeTest(this.quiz_id);
        this.checkparams()
    },
}
</script>
 
<style scoped>
.page{
    /* height: 100vh; */
    padding: 5rem;
}

.page--content-container{
    height: 100%;
    width: 100%;
}

.row-container{
    display: flex;
    flex-direction: row;
    margin: auto;
    height: 2rem;
}

.back--btn{
    margin: auto 4px;
}

.btn-beta{
    display: flex;
    background-color: #be1e2d;
    height: 30px;
    width: 60px;
    border-radius: 3px;
    border: none;
    margin-left: 1rem;
}

.btn-beta p{
    line-height: 1px;
    color: white;
    text-align: center;
    margin: auto;
}

.header-title{
    margin-top: 1rem;
    font-weight: 700;
}

.content-header{
    height: 100%;
    margin: 0 4.45rem;
}

.ini-page-body{
    height: 100%;
    width: 100%;
}

.header-body{
    font-size: 20px;
    max-width: 60%;
}

.btn-container{
    width: 100%;
    text-align: right;
}

.btn--get-started{
    background-color: #0e9cf5;
    color: #fefefe;
    font-weight: 500;
    font-size: 18px;
    border-radius: 0px;
    margin-top: 2rem;
}

.video--player{
    margin-top: 2rem;
    width: 100%;
}

.video-element{
    height: 30rem;
    background-size: cover !important;
}

@media screen and (max-width: 768px) {
    .header-body{
        max-width: 100%;
    }
    .btn-container{
        width: 100%;
        text-align: left;
    }
    .page{
        padding: 1rem;
    }
    .content-header{
        height: 100%;
    }
}
</style>