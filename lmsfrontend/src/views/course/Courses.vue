<template>
    <div class="courseregister">
        <div class="sidebar">
            <Sidebar></Sidebar>
        </div>

        <div class="dashnav">
          <Dashboardnavbar></Dashboardnavbar>
        </div>

        <div class="course-data">
            <main id="main" class="jumbotron" v-for="course in courses" :key="course.id">
                <Section class="sec1">
                    <div class="h1-box"></div>
                    <h1>{{ course.title }}</h1>
                    <div class="secText">
                        <p>
                            {{ course.description }}
                        </p>
                    </div>
                </Section>

                <Section class="sec2">
                    <div class="enroll">
                        <div class="enrollText">
                            <p>Start course and expand your knowledge in agile! </p>
                        </div>
                        <div class="enroll-btn">
                            <router-link :to = "{ name:'Courseintro' }" exact class="btn btn-lg btn-primary start-btn">Start Course</router-link>
                        </div>
                        <div class="enroll-list">
                            <div class="enroll-icon"><i class="fas fa-list-alt"></i>7 modules</div>
                            <div class="enroll-icon"><i class="fab fa-youtube-square"></i> 50 Videos</div>
                            <div class="enroll-icon"><i class="fa fa-clock"></i> 72 Hours</div>
                        </div>
                    </div>
                </Section>
            </main>

            <hr>
            <Section class=" container card-box">
                <div class="card-deck mb-3 text-center">
                    <!-- <div class="card mb-4 shadow-sm cardd"  v-for="course in courses" :key="course.id">
                        <div class="card-body">
                            <button class="btn btn-lg btn-primary">{{ course.title }}</button>
                            <button class="btn btn-lg btn-primary">{{ course.description }}</button>
                        </div>
                    </div> -->
                </div>
            </Section>

        </div>

    </div>    
</template>


<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue'
import Dashboardnavbar from '@/components/Dashboard/Dashboardnavbar.vue'

// Api call
// import { getAPI } from '../utils/axios-api'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: 'Dashboard',

    // If user does not select keep me signed redirect to signin when dashboard is idle
    // onIdle () {
    //     this.$store.dispatch('userLogout')
    //     .then(() => {
    //         this.$router.push({ name: 'Signin' })
    //     })
    // },

    components:{
        Sidebar,
        Dashboardnavbar, 
    },

    computed: {
        ...mapState("course", ["courses"])
    },
    
    methods: {
        ...mapActions("course", ["getCourses"]),
        // console.log()

        courses(){
            // Do something
        }
    },
    // get data from store **pass the action name**
    mounted(){
        this.getCourses();  
    },


}

</script>

<style scoped>
.sidebar{
  position: fixed;
  z-index: 2;
}

.dashnav{
  position: static;
  z-index: 1;
}

#main{
    background-color: #3B3B3B;
    display:inline-block;
    margin: 0 auto;
    /* text-align: center;
     */
     
}

#main Section{
    width: 50%;
    /* display: inline-block; */
    float: left;
    margin: 0 auto;
    padding:60px 0 0 100px;
    text-justify: auto;
}

#main .sec1{
    color:white;
}

#main h1{
    font-weight: 900;
    /* color: green; */

}

#main .secText{
    text-align: justify;
    /* margin: 200 0 0 0; */
    

}
/* section 2 */
.enroll{
    margin: 0 auto;
    width:300px;
    padding:30px;
    background-color: white;
}

.enroll-btn .start-btn{
    background-color: #0E9CF5;
    text-align: center;
    color: white;
    padding:10px;
    width: 100%;
    offset: 0;
}

.enroll-list{
    padding: 20px 0 0 0;
}

.card-box{
   padding: 60px;
   padding-left: 7rem;
}
.cardd{
    /* height: 250;
    width: 250; */
    padding: 80px 0;
}
</style>