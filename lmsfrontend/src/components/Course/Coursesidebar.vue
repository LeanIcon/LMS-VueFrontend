<template>
     <!--Course page sidebar-->
            <div id="mySideBar" class="sidebar">
                <div class="sidebar-header">
                    <div class="header-text row">
                        <h4 class="bar-title col-10">Skill Overview</h4>
                        <div class="bar-title close-btn col-2" v-on:click="closeNav"><span aria-hidden="true">&times;</span></div>
                    </div>
                </div>
            
                <div class="module-content" v-for="course in courses" :key="course.id">
                    <div class="module-content" v-for="course_module in course.modules" :key="course_module.id">
                        <!-- <div class="module-content" v-for="course in courses" :key="course.id"> -->

                        <div class="mySideBarMenuItem"><a  data-toggle="collapse" v-bind:data-target="`#submenu-${course_module.id}`">+  {{ course_module.title }}</a>
                            
                            <hr>
                            <ul v-bind:id="`submenu-${course_module.id}`" class="collapse side-nav" v-for="course_lesson in course_module.lessons" :key="course_lesson.id">
                                <!-- <div class=""></div> -->
                                <li v-if="course_lesson.is_completed"><a class="submenu-item lesson-title" :title="`${course_lesson.title}`"><i class="far fa-check-circle" style= "color: green;"></i> {{ course_lesson.title }}</a></li>
                                <li v-if="!course_lesson.is_completed"><a class="submenu-item lesson-title" :title="`${course_lesson.title}`"><i class="far fa-check-circle" style= "color: white;"></i> {{ course_lesson.title }}</a></li>
                                <!-- <li><a class="submenu-item">- Requirements</a></li> -->
                            </ul>
                        </div>
                </div>
                </div>
                
            </div>
           


</template>

<script type="text/javascript">
    // Api call
    // import { getAPI } from '../utils/axios-api'
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
    name: "Coursesidebar",
    
    // props: ['course_lesson'],
    
    computed: {
        ...mapState("course", ["courses"])
    },
    
    methods: {
        ...mapActions("course", ["getCourses"]),
        // console.log()

        courses(){
            // Do course_module
        },

        closeNav: function closeNav(){
        document.getElementById("mySideBar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        this.navToggle = true
    
    }
    },
    };

    (function () {
        ('[data-toggle="tooltip"]').tooltip();
        (".side-nav .collapse").on("hide.bs.collapse", function () {
            (this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
        });
        ('.side-nav .collapse').on("show.bs.collapse", function () {
            (this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
        });
    })
</script>

<style lang="scss" scoped>
.sidebar{
    height: 100%;
    color: white;
    width: 0;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: #C3000C;
    overflow-x: hidden;
    transition: 0.5s;
    font:lato;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.sidebar::-webkit-scrollbar {
    display: none;
}

.close-btn{
    cursor: pointer;
    font-weight: 600;
}

/* Hide scrollbar for IE, Edge and Firefox */
.sidebar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.bar-title{
    margin: 3rem auto;
    margin-bottom: 2rem;
    text-align: center;
}

.lesson-title{
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    width: 80%;
}

// .module-title{
//     white-space: nowrap; 
//     overflow: hidden; 
//     text-overflow: ellipsis;
// }

.course-module{
    height: 35px;
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.137);
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
}

.sidebar a{
    /* padding: 8px 8px 8px 32px; */
    text-decoration: none;
    font-size: 16px;
    color: white;
    display: block;
    transition: 0.3s;

}

.side-nav{
    margin: 0 -2rem;
}

.mySideBarMenuItem{
    padding: 0 20px;
    cursor: pointer;
}

.collapse > li > a{
    text-decoration: none;
    cursor: pointer;
}

.collapse > li, .side-nav > li{
    list-style: none;
}

.side-nav li a:hover,
.side-nav li a:focus {
    outline: none;
    color: rgba(195,0,12,1) !important;
    background-color: #fff;
}

.side-nav>li>ul {
    padding: 0;
    border-bottom: 1px rgba(0,0,0,.3) solid;
}

.side-nav>li>ul>li>a {
    display: block;
    padding: 10px 15px 10px 38px;
    text-decoration: none;
    /*color: #999;*/
    color: #fff;    
}

</style>