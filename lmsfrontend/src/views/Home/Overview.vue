<template>
    <div class="page">
        <div class="header-content">
            <h1>Everybody Loves Agile</h1>
        </div>
        <div class="page-header">
        </div>
        <div class="logo-box">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="intro">
            <div class="row">
                <div class="col image-box">
                    <img src="@/assets/images/courseimg.png" alt="" class="courseimg">
                </div>
                <div class="col content-box">
                    <h3 class="intro-title">What You Will Learn</h3>
                    <ul class="intro-items">
                        <li>Interpret Data to Inform Business Decisions</li>
                        <li>Recognize trends, detect outliers, and summarize data sets</li>
                        <li>Analyze relationships between variables</li>
                        <li>Develop and test hypothesis</li>
                    </ul>
                </div>
            </div>

        </div>


        <Footer class="footer"></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
    components: {
        Footer
    }

}
</script>

<style scoped>
.content-box{
    margin: auto;
}
.image-box{
    text-align: center;
}

.intro-title{
    font-weight: 700;
}

.image-box img{
    height: 20rem;
    width: 28rem;
}

.courseimg{
    margin: auto;
}

.intro{
    width: 100%;
    overflow: hidden;
}
.logo-box{
    position: relative;
    left: 80%;
    width: 3rem;
    transform: translateY(-50%);
}

.page-header{
    /* width: 100vw; */
    height: 40vh;
    background:url(../../assets/overviewBG.jpg);
    background-size: 100%;
    background-blend-mode: multiply;
}

.header-content{
    color: #f5f5ed;
    position: absolute;
    z-index: 1000;

}

.page-header:before{
    content: "";
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    background: linear-gradient(270deg, rgba(196, 2, 2, 0.76) 0%, rgba(0, 0, 0, 0.72) 100.87%);
    height: 40vh;
}

.logo-box img{
    width: 11rem;
}

.footer{
    margin-top: 15rem;
}
</style>