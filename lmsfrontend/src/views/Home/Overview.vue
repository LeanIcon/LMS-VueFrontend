<template>
    <div class="page">
        <div class="header-content">
            <div class="content-data">
                <h1 class="data-title">Agile Business Analysis</h1>
                <p class="data-content">
                    Business analysis is a research discipline of identifying business needs and determining solutions to business problems.... <span> read more</span>
                </p>
                <a class="btn head-btn">Get Started</a>
            </div>
        </div>
        <div class="page-header">
        </div>
        <div class="logo-box">
            <img src="@/assets/images/logo.png" alt="">
        </div>

        <section class="intro">
            <div class="row">
                <div class="col-md-6 image-box">
                    <img src="@/assets/images/courseimg.png" alt="" class="courseImg">
                </div>
                <div class="col-md-6 content-box">
                    <h3 class="intro-title">What You Will Learn</h3>
                    <ul class="intro-items">
                        <li>Interpret Data to Inform Business Decisions</li>
                        <li>Recognize trends, detect outliers, and summarize data sets</li>
                        <li>Analyze relationships between variables</li>
                        <li>Develop and test hypothesis</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="row section-two mt-5">
                <div class="col-md-6 overview">
                    <div class="benefit-one">
                        <h3 class="intro-title">Your Advantage</h3>
                        <ul class="course-benefits">
                            <li>World-class faculty</li>
                            <li>Edge-of-your-seat online learning</li>
                            <li>Global peer collaboration and networking</li>
                            <li>Real-world, case-based learning</li>
                        </ul>
                        <h3 class="intro-title">Earn a Certificate</h3>
                        <p class="certification-content">
                            When you finish every course and complete 
                            the hands-on project, you'll earn a Certificate
                            that you can share with prospective employers 
                            and your professional network.
                        </p>
                    </div>
                </div>
                <div class="video">

                </div>
        </section>

        <section class="row section-three mt-5">
            <div class="col-3 user-image">
                <img src="@/assets/images/user1.jpg" alt="testimonial user" class="rounded-image user-inactive">
                <img src="@/assets/images/user2.jpg" alt="testimonial user" class="rounded-image user-current">
            </div>
            <div class="col-9">
            </div>
        </section>





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
.head-btn:hover{
    background-color: white;
    color: black;
}

.benefit-one{
    height: 100%;
    padding: 3.5rem 4.5rem;

}

.section-two, .section-three{
    width: 100%;
    margin: auto;
}

.overview{
    background-color: #3D3D3D;
    width: 100%;
    height: 100%;
    color: white;
}

.head-btn{
    display: flex;
    align-items: center;
    place-content: center;
    width: 170px;
    height: 45px;
    border: 1.5px solid #ffffffc0;
    box-sizing: border-box;
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
}

.data-content{
    text-transform: capitalize;
    font-size: 18px;
    width: 70%;
}

.data-title{
    font-weight: 600;
    font-size: 35px;
    text-transform: capitalize;
}

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
    margin-top: -2rem;
}

.logo-box{
    position: relative;
    left: 80%;
    width: 3rem;
    transform: translateY(-50%);
}

.page-header{
    /* width: 100vw; */
    height: 45vh;
    background:url(../../assets/overviewBG.jpg);
    background-size: cover;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
}

.header-content{
    display: flex;
    align-items: center;
    color: #f5f5ed;
    position: absolute;
    z-index: 1000;
    width: 80%;
    height: 45vh;
    margin: auto;
}

.content-data{
    width: 80%;
    height: 50%;
    margin: auto;
}

.page-header:before{
    content: "";
    position: absolute;
    left: 0; right: 0;
    top: 0; bottom: 0;
    background: linear-gradient(270deg, rgba(102, 0, 0, 0.822) 0%, rgba(0, 0, 0, 0.904) 100.87%);
    height: 45vh;
}

.logo-box img{
    width: 11rem;
}

.footer{
    margin-top: 15rem;
}

.rounded-image{
    border-radius: 50%;
    height: 200px;
    width: 200px;
}

.user-image{
    position: relative;
    margin: auto;
    text-align: center;
}

.user-current {
    position: relative;
    z-index: 2;
    top: -130px;
    left: 40px;
}

.user-inactive {
    position: relative;
    z-index: 1;
    height: 150px;
    width: 150px;
}

</style>