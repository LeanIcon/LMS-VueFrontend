<template>
        <div class="courseintro">
            <!-- <div class="dashnav">
                <Dashboardnavbar></Dashboardnavbar>
            </div>
            <div class="csidebar">
            <Coursesidebar></Coursesidebar>
            </div> -->

            <div class="main-body">
                
                <main id="main"><main>
                <div class="main-header">
                        <!-- <HamburgerSlide></HamburgerSlide> -->
                        <div class="header-text"> <h2>Learn Business Analysis</h2></div>
                    </div>
                </main>
                    <div class="main-body">
                        {{ getLessons }}
                        <!-- {{ lesson }} -->
                    </div>    
                </main >
            </div>    
        </div>   
</template>



<script>

import { mapGetters } from 'vuex'

export default {
    name: 'Courseintro',
    // ...
    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'getLessons'
        // ...
        ])
        // getters: {
        //     // ...
        //     getLesson: (state) => (id) => {
        //         return state.courses.modules.find(lesson => lesson.id === id)
        //     }
        // }
    },

    // methods:{
    //     lesson: this.$store.getters.getLesson(2)
    // }
}

</script>   

<style scoped>
.dashnav{
    position: static;
    z-index: 0;
}

.main-body{
    padding-top: 3rem;
    background-color: #EDEDED;
    padding-left: 4rem;
    padding-right: 30px;
}

#main{
    transition: margin-left .5s;
    padding: 16px;
}

hr{
    background-color: white;
    opacity: 0.5;
}

#main .main-header div{
    display: inline-block;
    padding: 10px;
}

.header-text h2{
    font-weight: 100;
    color: grey;
}

.main-body h3{
    font-weight: 700;
}

.video-div{
    background-color: #F0F5F7;
    padding:50px;
    /* height: 480px; */
}

video{
    height: 70%;
    width: 70%;
    margin: auto;
}

.course2-btn{
    padding:30px 0;
}

</style>

