<template>
   <div class="page--container">
      <div class="nav_socials d-flex px-5 py-3">
         <!-- <p class="bck-btn text-white">test</p> -->
         <router-link :to="{ name:'Skill'}" tag="a" exact class="bck-btn text-white"> <i class="back--btn fa fa-arrow-left text-white"></i> Quiz</router-link>
         <!-- <div class="share-links">
            <ul class="d-flex share_socials">
               <p class="share-info mr-3">Share your test results: </p>
               <li><i class="fab fa-linkedin share-icon ml-2" aria-hidden="true"></i></li>
               <li><i class="fab fa-facebook share-icon ml-2" aria-hidden="true"></i></li>
               <li><i class="fab fa-instagram share-icon ml-2" aria-hidden="true"></i></li>
            </ul>
         </div> -->
      </div>
      <div class="res-card row w-100 container">
         <div class="results-main col-md-8">
            <h1 class="head-one">Assessment details</h1>
            <h1 class="head-two" v-if="percentage >= 65">{{ name }}: <span class="status-pass">Passed</span></h1>
            <h1 class="head-two" v-if="percentage < 65">{{ name }}: <span class="status-failed">Failed</span></h1>
            <h1 class="head-one">verified <span class="date-time">{{ date }}</span></h1>

            <div class="header-info mt-5">
               <h1><router-link :to="{ name:'WrongAnswers', params: dummy.wrong_anwers }" tag="a" exact class="bck-btn">View my wrong answers</router-link></h1>
               <h1>Think you can do better? <router-link :to="{ name:'Skill'}" tag="a" exact class="bck-btn"> Try again </router-link></h1>
            </div>
         </div>
         <div class="course-img col-md-4">
            <!-- <img src="@/assets/images/quizlogo.png" alt="" class="h-100"> -->
            <div class="svg_wrap">
               <svg viewBox="0 0 32 32">
                        <circle class='svg_background'></circle>
                        <circle class='svg_calc' :stroke-dasharray="`${percentage} 100`"></circle>
               </svg>
               <div class="svg_value">{{ percentage }}</div>
            </div>
         </div>
      </div>
      <div class="container mt-5">
         <div class="banner row">
            <div class="banner-content col-9 pl-5">
               <p>Next, we recommend</p>
               <h3><b>Guided Learning:</b> Take the course</h3>
            </div>
            <div class="banner-btn col-3 pr-5" style="text-align: right;">
               <div class="btn btn-white">Start Course</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { getAPI } from "../../utils/axios-api";
const token = localStorage.getItem("access_token");

export default {
   data(){
      return{
         score: 0,
         results: '',
         percentage: 0,
         name: '',
         dummy: '',
         date: '',
      }
   },

   methods:{
      issueDate(){
         const current = new Date();
         const date = current.getFullYear()+'.'+(current.getMonth()+1)+'.'+current.getDate();

         this.date = date
      },

      getResults(slug){
         getAPI
            .get(`/quizzes/${slug}/`, {
               headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
               this.results = res.data
               this.percentage = this.results.quiz.quiztakers_set.percentage
               this.name = this.results.quiz.name
               this.$loading(false)
            })
            .catch((err) => {
               this.$loading(false)
               console.log(err);
            });
      },
      checkparams(){
         if (!this.$route.params.slug) {
            this.$loading(false)
            this.$router.push("/skill"); // redirect to quiz page
         } else {
            const slug = this.$route.params.slug;
            this.dummy = this.$route.params.results;
            this.getResults(slug);
         }
      },
   },

   mounted(){
      this.issueDate()
   },

   beforeMount(){
      this.$loading(true)
      this.checkparams()
   }
}
</script>

<style lang="css" scoped>

p, h1, h2{
   color: #fff
}

.bck-btn{
   margin: auto 0;
}

.bck-btn:hover{
   text-decoration: none;
}

.course-img{
   text-align: right;
}

.page--container{
   background: linear-gradient(0deg, rgba(6, 6, 6, 0.84), rgba(6, 6, 6, 0.84)), url('../../assets/images/resultsbg.png');
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
   height: 100vh;
   width: 100vw;
}

.nav_socials{
   justify-content: space-between;
   height: 3rem;
   width: 100%;
}

ul li{
   list-style: none;
   text-decoration: none;
   color: #fff;
   margin: auto;
}


.share-icon{
   font-size: 1.6rem;
   margin: auto;
}

.share-info{
   margin: auto;
   color: #fff;
   font-size: 0.8rem;
}

.share_socials{
   margin: auto 0;
   height: 100%;
}

.head-one{
   font-family: 'Inter';
   font-weight: 500;
   font-size: 17px;
   text-transform: uppercase;
   line-height: 10px;
}

.res-card{
   margin: 6rem auto;
}

.head-two{
   font-size: 30px;
   font-weight: 600;
   text-transform: capitalize;
}

.status-pass{
   color: rgb(0, 219, 0);
}

.status-failed{
   color: rgb(219, 7, 0);
}

.header-info h1{
   font-size: 17px;
}

.banner{
   height: 6rem;
   width: 100%;
   background-color: #4F4D4D;
   color: #fff;
}

.banner-content p{
   margin-bottom: 1px;
}

.banner-content, .banner-btn{
   margin: auto;
}

.btn-white{
   background-color: #fff;
   border: 0px solid;
   border-radius: 5px;
   /* width: 12rem; */
   font-weight: 600;
}

.svg_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
}

.svg_wrap svg {
    height: 10rem;
    border-radius: 60%;
    transform: rotate(-90deg);
}

.svg_wrap svg circle {
    fill: none;
    r: 16px;
    cx: 16px;
    cy: 16px;
    stroke-width: 5;
}

.svg_wrap svg circle.svg_background {
    stroke: rgb(225, 225, 225);
}

.svg_wrap svg circle.svg_calc {
    stroke: #E01010;
}

.svg_wrap .svg_value {
    position: absolute;
    font-weight: 700;
    font-size: 30px;
    color: #fff
}

.svg_wrap .svg_value:after {
    content: "%";
}


@media screen and (max-width: 754px) {
   .banner{
      width: auto;
   }

   .banner-content h3{
      font-size: 20px;
   }

   .svg_wrap{
      margin-top: 3rem;
   }

   .head-two{
      font-size: 30px;
   }

   .head-two{
      font-size: 24px;
   }
}
</style>