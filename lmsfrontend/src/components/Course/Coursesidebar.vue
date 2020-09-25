<template>
     <!--Course page sidebar-->
            <div id="mySideBar" class="sidebar">
                <div class="sidebar-header">
                    <div class="header-text">
                        <h3 class="bar-title">Course Overview</h3>
                    </div>
                </div>
            
                <div class="module-content" v-for="course in courses" :key="course.id">
                    <div class="module-content" v-for="course_module in course.modules" :key="course_module.id">
                        <!-- <div class="module-content" v-for="course in courses" :key="course.id"> -->

                        <div class="mySideBarMenuItem"><a  data-toggle="collapse" v-bind:data-target="`#submenu-${course_module.id}`">+  {{ course_module.title }}</a>
                            
                            <hr>
                            <ul v-bind:id="`submenu-${course_module.id}`" class="collapse side-nav" v-for="course_lesson in course_module.lessons" :key="course_lesson.id">
                                <li><a class="submenu-item">- {{ course_lesson.title }}</a></li>
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
        
    computed: {
        ...mapState("course", ["courses"])
    },
    
    methods: {
        ...mapActions("course", ["getCourses"]),
        // console.log()

        courses(){
            // Do course_module
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
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #C3000C;
    overflow-x: hidden;
    transition: 0.5s;
    font:lato;
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

hr{
    background-color: white;
    opacity: 0.5;
}

.mySideBarMenuItem{
    padding: 0 10px;
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