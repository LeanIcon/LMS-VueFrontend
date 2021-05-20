<template>
    <div class="skill">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
            <Dashboardnavbar></Dashboardnavbar>
        </div>


        <div class="page--body--container">
            <div class="display-banner">
                <!-- <img src="../assets/images/display-image.png" alt="" class="display-image"> -->
                <div class="banner--overlay"></div>
                
            </div>
            <div class="progress-bar">
                <div class="bar-limit"></div>
            </div>


            <div class="quiz-content m-5">
                <h1 class="content-header">
                    Quizzes
                </h1>
                <p class="additional-info">Select your preferred quiz and try it out! </p>

                <div class="row quiz-cards">
                    <div class="col-md-6">
                        <div class="quiz-card--item card">
                            <div class="card--header row">
                                <div class="logo-box col-sm-3">
                                    <img src="@/assets/images/quizlogo.png" alt="pba logo">
                                </div>
                                <div class=" quiz-title col-sm-9">
                                    <h1 class="card--bold--title">Practical Business Analysis</h1>
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
                                    <div class="btn card-btn">
                                        View Quiz
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="quiz-card--item card">
                            <div class="card--header row">
                                <div class="logo-box col-sm-3">
                                    <img src="@/assets/images/quizlogo2.png" alt="pba logo">
                                </div>
                                <div class=" quiz-title col-sm-9">
                                    <h1 class="card--bold--title">Practical Requirement Engineering</h1>
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
                                    <div class="btn card-btn">
                                        View Quiz
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="audio-slides m-5">
                <h1 class="content-header">
                    Short Audio Lessons
                </h1>
                <p class="additional-info">Course Content</p>
                <div class="audio-slides--cards col-12 card"></div>
                <div class="audio-slides--cards col-12 card"></div>
                <div class="audio-slides--cards col-12 card"></div>
                <div class="audio-slides--cards col-12 card"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'

export default {
// @ is an alias to /src
    name: 'Dashboard',

    components:{
        Sidebar,
        Dashboardnavbar,
    },
}
</script>

<style lang="scss" scoped>
.sidebar{
    position: fixed;
    z-index: 2;
    top: 0;
}

.dashnav{
    position: static;
    z-index: 1;
}

.page--body--container{
    padding-left: 4.5rem;
    width: 100%;

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
    margin: 0 -15px 0 15px ;
    height: 50px;
    border-radius: 32px;
    background: #f9f9f9;
    box-shadow: 5px 5px 10px #dadada94, -5px -5px 10px #ffffff;
    margin-bottom: 20px;
    width: 98%;
    border: none;
}
</style>