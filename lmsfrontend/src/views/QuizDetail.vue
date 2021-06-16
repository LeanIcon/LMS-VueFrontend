<template>
    <div class="quizdetail">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>
        <div class="dashnav">
            <Dashboardnavbar></Dashboardnavbar>
        </div>
        
        <div class="page--body--container">
            <div class="header-content">
                <div class="info-header">
                    <h1 class="caption">
                        {{ CategoryInfo.name }}
                        <!-- Practical Business Analysis -->
                    </h1>
                    <p class="addtional-caption">Congrats! You have taken the first step to assess your current skills.</p>
                </div>
            </div>
            <div class="display-banner">
                <!-- <img src="../assets/images/display-image.png" alt="" class="display-image"> -->
                <div class="banner--overlay"></div>                
            </div>
            
            <div class="progress-bar">
                <div class="bar-limit"></div>
            </div>

            <div class="page--content row">
                <div class="col-lg-6 main-content--section p-5 mt-3">
                    <h1 class="content-title ini-title">
                        Ready, 
                        <br>Let's Go!
                    </h1>
                    <div class="additional-content">
                            {{ CategoryInfo.description }}
                        <br><b>Related Topics:</b>
                        <br>{{ CategoryInfo.related_topics }}

                    </div>
                </div>
                <div class="col-lg-6 mt-5">
                    <div v-if="loaded" class="quiz-card--listing">
                        <div class="quiz-cards card" v-for="category in CategoryDetail" :key="category.id">
                            <div class="ini-card-bottom row">
                                <div class="col-sm-8">
                                    <div class="ml-3">
                                        <h1 class="ini-title content-header">Quiz {{ category.order }}</h1>
                                        <div class="retake-count">
                                            <div class="pass-limit"></div>
                                        </div>
                                        <p class="data-history">0/10 Average Score Count</p>
                                    </div>
                                </div>
                                <div class="col-sm-4 btn-container">
                                    <router-link :to="{ name:'QuizOverview', params:{title: `${category.name}`, quiz_id: `${category.slug}`} }" class="btn card-btn" tag="a" exact>Start</router-link>
                                    <!-- <div>Start</div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!loaded" class="quiz-card--listing load-placeholder">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="extras--courses">
                <div class="sub-title"><h1>Courses</h1></div>
                <hr>
                <div class="video-playlist row">
                    <div class="video-element col-lg-4 col-md-12 col-sm-12 mb-3">
                        <vue-plyr>
                            <video poster="@/assets/images/videoposter.png" src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4">
                                <source src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4" type="video/mp4" size="1080">
                            </video>
                        </vue-plyr>
                    </div>
                    <div class="video-element col-lg-4 col-md-12 col-sm-12 mb-3">
                        <vue-plyr>
                            <video poster="@/assets/images/videoposter.png" src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4">
                                <source src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4" type="video/mp4" size="1080">
                            </video>
                        </vue-plyr>
                    </div>
                    <div class="video-element col-lg-4 col-md-12 col-sm-12 mb-3">
                        <vue-plyr>
                            <video poster="@/assets/images/videoposter.png" src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4">
                                <source src="https://res.cloudinary.com/littlms/video/upload/v1599179957/2020-07-24_Design_Thinking_Define_Stage_SWOT_and_TOWS_Analysis_ihwgnl.mp4" type="video/mp4" size="1080">
                            </video>
                        </vue-plyr>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import { getAPI } from '../utils/axios-api'
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'
import Footer from '@/components/Dashboard/Footer.vue'

export default {
// @ is an alias to /src
    name: 'QuizDetail',

    data(){
        return{
            CategoryDetail: {},
            CategoryInfo: {},
            slug: '',
            token: '',
            loaded: false
        }
    },

    components:{
        Sidebar,
        Dashboardnavbar,
        Footer,
    },

    methods: {
        // ...mapActions(["fetchQuizCategoryDetail"]),
        async loadCategoryDetail() {
            await getAPI.get(`/quiz/category/${ this.slug}/`, { headers: { Authorization: `Bearer ${ this.token }`}})
                .then(({ data }) => {                    
                    this.CategoryDetail = data.quiz_category;
                })
                .then(()=>{
                    this.loaded = true;
                })
                .catch(({ response }) => {
                    console.log(response);
                });
        },

        async loadCategory() {
            await getAPI.get(`/quiz_category/${ this.slug }/`, { headers: { Authorization: `Bearer ${ this.token }`}})
                .then(({ data }) => {
                    this.CategoryInfo = data.category;
                })
                .catch(({ response }) => {
                    console.log(response);
                });
        },
    },

    computed: {
        // ...mapState(["category_detail"]),
    },
        // get data from store **pass the action name**
    mounted(){
        const slug = this.$route.params.slug;
        this.slug = slug
        const token = localStorage.getItem('access_token');
        this.token = token
        this.loadCategoryDetail()
        this.loadCategory()
    },
}
</script>

<style scoped lang='scss'>
.load-placeholder{
    text-align: center;
    margin-top: 8rem;
}

.header-content{
    display: flex;
    align-items: center;
    color: #f5f5ed;
    position: absolute;
    z-index: 0;
    max-width: 65rem;
    height: 22rem;
    margin: auto;
    margin-left: 5rem;
}

.caption{
    font-family: 'Poppins';
    line-height: 20px;
}

.display-banner{
    position: relative;
    background: url(../assets/images/display-image.png);
    background-size: cover;
    background-position: center; 
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    height: 22rem;
    z-index: -1;
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
    height: 5px;
    background-color: #dadada;
}


.bar-limit{
    width: 10%;
    height: 5px;
    position: relative;
    background-color: #0e9cf5;
    top: 0;
}

.page--content{
    width: 100%;
}

.content-title{
    font-weight: 700;
    font-size: 45px;
}

.main-content--section{
    padding-left: 7rem !important;
}

.quiz-cards{
    height: 5rem;
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 22px;
    background: #3f3f3f;
    box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.11);
}

.content-header{
    font-size: 23px;
    font-weight: 700;
    color: #fefefe;
}


.retake-count{
    height: 5px;
    margin: auto;
    background-color: #464646;
}


.pass-limit{
    width: 50%;
    height: 5px;
    position: relative;
    /* background-color: #f2881a; */
    top: 0;
}

.data-history{
    font-size: 12px;
    color: #f2881a;
    margin: auto;
}

.ini-card-bottom{
    width: 100%;
    margin: auto;
}

.btn-container{
    text-align: right;
    margin: auto;
}

.card-btn{
    border: 2px solid #fefefe;
    border-radius: 50px;
    color: #fefefe;
    width: 5rem;
    height: 2rem;
    font-size: 13px;
    padding: 3px;
    position: relative;
    bottom: -10px;
}

.extras--courses{
    margin: 2rem 7rem 5rem 7rem;
}

.sub-title h1{
    font-weight: 500;
    font-size: 22px;
    line-height: 20px;
    font-family: 'Poppins';
}

.sub-title{
    border-bottom: 3px solid #f2881a;
    width: 90px;
    margin-bottom: -1rem;
}

.video-element{
    max-width: 32rem;
}


@media screen and (max-width: 754px) {
    .sidebar{
        display: none;
    }

    .mobileNav{
        display: initial;
    }

    .home-content{
        background-color: #EDEDED;
        position: absolute;
        width: 100%;
        padding-left: 0;
        top: 52px;
        height: 150%;
    }
    .page--body--container {
        padding-left: 0rem;
        width: 100%;
    }

    .footer{
        display: none;
    }

    .header-content{
        margin-left: auto;
        text-align: center;
        height: 18rem;
    }

    .caption{
        font-size: 25px;
        padding: 0 1rem;
    }

    .display-banner{
        height: 18rem;
    }

    .quiz-content{
        margin: 1rem !important;
        margin-bottom: 10rem !important;
    }

    .logo-box{
        height: 4rem;
        max-width: 30%;
    }

    .card--header{
        display: flex;
        flex-direction: row;
    }

    .card--bold--title{
        height: auto;
        font-size: 23px;
        margin: auto;
        text-align: center;
    }

    .quiz-btn{
        text-align: center;
        margin-top: 2.5rem;
    }


}
</style>