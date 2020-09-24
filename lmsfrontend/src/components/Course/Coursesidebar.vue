<template>
     <!--Course page sidebar-->
            <div id="mySideBar" class="sidebar">
                <div class="sidebar-header">
                    <div class="header-text">
                        <h3 class="bar-title">Course Overview</h3>
                    </div>
                </div>
            
            
                <div class="mySideBarMenuItem"><a  data-toggle="collapse" data-target="#submenu-1">+  Course Introduction</a>
                    <hr>
                    <ul id="submenu-1" class="collapse side-nav">
                        <li><a class="submenu-item">- Introduction</a></li>
                        <li><a class="submenu-item">- Requirements</a></li>
                    </ul>
                </div>

                <div class="mySideBarMenuItem"><a  data-toggle="collapse" data-target="#submenu-2">+  Market Analysis</a>
                    <hr>
                    <ul id="submenu-2" class="collapse side-nav">
                        <li><a class="submenu-item">- Estimation</a></li>
                        <li><a class="submenu-item">- Regression</a></li>
                        <li><a class="submenu-item">- Linear Optimization</a></li>
                        <li><a class="submenu-item">- Dynamic Optimization</a></li>
                    </ul>
                </div>

                <div class="mySideBarMenuItem"><a  data-toggle="collapse" data-target="#submenu-3">+  Assessment</a>
                    <hr>
                    <ul id="submenu-3" class="collapse side-nav">
                        <li><a class="submenu-item">- Quiz</a></li>
                        <li><a class="submenu-item">- Course Recap</a></li>
                        <li><a class="submenu-item">- Your Next Step</a></li>
                    </ul>
                </div>
                
            </div>
           


</template>

<script type="text/javascript">
    export default {
        name: "Coursesidebar",
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