<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
            <Dashboardnavbar></Dashboardnavbar>
        </div>


        <div class="page--body--container">
            <div class="header-content">
                <div class="info-header">
                    <h1 class="caption">
                        Build In-demand agile skills with free access to Quizzes and more. Upgrade below for full access!
                    </h1>
                    <div class="caption-button btn btn-primary">Upgrade Now</div>
                </div>
            </div>
            <div class="display-banner">
                <!-- <img src="../assets/images/display-image.png" alt="" class="display-image"> -->
                <div class="banner--overlay"></div>
                
            </div>
            <div class="progress-bar">
                <div class="bar-limit"></div>
            </div>


            <div class="quiz-content m-5">
                <h1 class="content-header ini-title">
                    Quizzes
                </h1>
                <p class="additional-info">Select your preferred quiz and try it out! </p>
                <div class="row quiz-cards">
                    <div class="col-md-6 col-lg-6 col-xl-6" v-for="quiz_category in quizCategories" :key="quiz_category.id">
                        <div v-if="quiz_category.name != 'Uncategorised'">
                            <div class="quiz-card--item card">
                                <div class="card--header row">
                                    <div class="logo-box col-sm-3">
                                        <img :src="`${quiz_category.img_url}`" alt="pba logo">
                                    </div>
                                    <div class=" quiz-title col-sm-9">
                                        <h1 class="card--bold--title">{{quiz_category.name}}</h1>
                                    </div>
                                </div>
                                <div class="progress--btn row">
                                    <div class="col-md-8" style="margin: auto;">
                                        <div class="test-bar">
                                            <div class="test-limit"></div>
                                            <p class="progress-info">2/4 Practice Test</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <router-link class="btn card-btn" :to="{ name:'QuizDetail', params: {slug: `${quiz_category.id}`} }" exact tag="div">
                                            View Quiz
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="audio-slides m-5">
                <h1 class="content-header ini-title">
                    Short Audio Lessons
                </h1>
                <p class="additional-info">Course Content</p>
                <div class="audio-playlist row">
                    <div class="col-md-12 col-xl-6">
                        <div class="audio-slides--cards"></div>
                    </div>
                    <div class="col-md-12 col-xl-6">
                        <div class="audio-slides--cards"></div>
                    </div>
                    <div class="col-md-12 col-xl-6">
                        <div class="audio-slides--cards"></div>
                    </div>
                    <div class="col-md-12 col-xl-6">
                        <div class="audio-slides--cards"></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
import Footer from '@/components/Dashboard/Footer.vue'

export default {
// @ is an alias to /src
    name: 'Skill',
    data(){
        return{
            quizCategories: this.$store.state.quiz_category.quiz_category,
        }
    },

    components:{
        Sidebar,
        Dashboardnavbar,
        Footer,
    },  

    mounted () {
        this.$store.dispatch('fetchQuizCategory')
    },
}
</script>

<style lang="scss" scoped>
.page--body--container{
    padding-left: 4.5rem;
    width: 100%;
}

.header-content{
    display: flex;
    align-items: center;
    color: #f5f5ed;
    position: absolute;
    z-index: 1;
    max-width: 65rem;
    height: 22rem;
    margin: auto;
    margin-left: 5rem;
}

.caption{
    font-size: 30px;
    font-weight: 600;
}

.caption-button{
    border-radius: 0px;
    font-size: 18px;
    margin-top: .8rem;

}

.display-banner{
    position: relative;
    background: url(../assets/images/display-image.png);
    background-size: cover;
    background-position: center; 
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    height: 22rem;
}

.display-banner:before{
    content: "";
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    background: linear-gradient(to left,rgba(197, 119, 2, 0.84) 0%, rgba(0, 0, 0, 0.75) 100%);
    height: 100%;
}

.display-image{
    width: 100%;
}

.progress-bar{
    width: 100%;
    height: 6px;
    background-color: #dadada;
}


.bar-limit{
    width: 10%;
    height: 6px;
    position: relative;
    background-color: #0e9cf5;
    top: 0;
}

.quiz-content{
    margin: auto;
}

.content-header{
    font-size: 25px;
    line-height: 19px;
    font-weight: bold;
}

.quiz-cards{
    width: 100%;
    margin: auto;
}

.quiz-card--item{
    margin: auto;
    border: none;
    height: 230px;
    // width: 520px;
    border-radius: 32px;
    background: #f9f9f9;
    box-shadow: 5px 5px 10px #dadada94, -5px -5px 10px #ffffff;
    margin-bottom: 20px;

}

.card--header{
    margin: 27px auto;
    width: 90%;
}

.logo-box, .card--bold--title{
    height: 100px;
    display: table-cell;
    vertical-align: middle;
}

.logo-box img{
    height: 100%;
}

.card--bold--title{
    font-size: 25px;
    font-weight: 500;
    line-height: 1;
}


.test-bar{
    width: 70%;
    height: 6px;
    margin: auto;
    background-color: #dadada;
}


.test-limit{
    width: 50%;
    height: 6px;
    position: relative;
    background-color: #f2881a;
    top: 0;
}

.progress-info{
    color: #f2881a;
    text-align: left;
}

.card-btn{
    border: 2px solid rgba(0, 0, 0, 0.534);
    border-radius: 20px;
    width: 120px;

}

.audio-slides--cards{
    // margin: 0 -15px 0 15px ;
    height: 50px;
    border-radius: 32px;
    background: #f9f9f9;
    box-shadow: 5px 5px 10px #dadada94, -5px -5px 10px #ffffff;
    margin-bottom: 20px;
    // width: 98%;
    border: none;
}
</style>