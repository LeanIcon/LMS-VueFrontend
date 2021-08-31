<template>
	<div class="page w-100">
		<Navbar></Navbar>
        <section class="section-1 hero-banner container">
            <div class="row">
                <div class="col-md-5 l1 px-5">
                    <h1>Gain Unlimited Skills</h1>
                    <p class="info">Discover the fastest, most effective way to gain job-ready expertise for the careers of the future.</p>
                    <router-link :to = "{ name:'Dashboard' }" class="btn btn-primary" tag="div">Get Started</router-link>
                </div>
                <div class="col-md-7 img-container">
                    <img src="@/assets/images/hero1.png" class="img-1" alt="">
                </div>
            </div>
        </section>
        <section class="section-2">
            <div class="hero-2">
                <h4 class="c1">Explore our courses</h4>
                <p>Learn several paths to a successful carrer</p>
                <div class="row flex-row">
                    <div class="col-md-4 mb-3">
                        <div class="card course-card">
                            <img class="card-img-top" src="@/assets/images/display-image (3).png" alt="Card image cap">
                            <div class="card-body">
                                <img src="@/assets/images/quizlogo.png" class="course-logo">
                                <div class="card-body row">
                                    <h6 class="course-title text-left col-8">Practical Business Analysis</h6>
                                    <div class="save-course col-4">
                                        <i class="fas fa-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card course-card">
                            <img class="card-img-top" src="@/assets/images/display-image (1).png" alt="Card image cap">
                            <div class="card-body">
                                <img src="@/assets/images/quizlogo2.png" class="course-logo">
                                <div class="card-body row">
                                    <h6 class="course-title text-left col-8">Requirement Engineering</h6>
                                    <div class="save-course col-4">
                                        <i class="fas fa-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card course-card">
                            <img class="card-img-top" src="@/assets/images/display-image (2).png" alt="Card image cap">
                            <div class="card-body">
                                <img src="@/assets/images/quizlogo1.png" class="course-logo">
                                <div class="card-body row">
                                    <h6 class="course-title text-left col-8">Agile Scrumn Foundation</h6>
                                    <div class="save-course col-4">
                                        <i class="fas fa-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-3 mt-5">
            <div class="hero-2 w-100">
                <h4 class="c1 title px-4">Take the next step toward your personal and professional goals with LittLearn</h4>
                <div class="row px-5">
                    <div class="col-6 col-lg-3 col-md-3 mt-4">
                        <div class="overview">
                            <img src="@/assets/images/Vector.png" alt="">
                            <p class="title">Learn the latest skills</p>
                            <p class="info">like business analytics, requirement engineering, data analysis, and more</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3 mt-4">
                        <div class="overview">
                            <img src="@/assets/images/Vector-1.png" alt="">
                            <p class="title">Learn the latest skills</p>
                            <p class="info">like business analytics, requirement engineering, data analysis, and more</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3 mt-4">
                        <div class="overview">
                            <img src="@/assets/images/Vector-2.png" alt="">
                            <p class="title">Learn the latest skills</p>
                            <p class="info">like business analytics, requirement engineering, data analysis, and more</p>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-3 mt-4">
                        <div class="overview">
                            <img src="@/assets/images/Vector-3.png" alt="">
                            <p class="title">Learn the latest skills</p>
                            <p class="info">like business analytics, requirement engineering, data analysis, and more</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-4 banner-bg mt-5">
            <div class="overlay banner-bg h-100 w-100 py-4">
                <div class="content text-center text-white px-5">
                    <h4>Take unlimited practice exams</h4>
                    <p class="info mt-4">Get rid of exam nerves long before you have to do the real thing. You can take as many practice exams as you need to feel confident heading into exam day.</p>
                    <!-- <div class="btn btn-primary mt-4">Get Started</div> -->
                    <router-link :to = "{ name:'Dashboard' }" class="btn btn-primary mt-4" tag="div">Get Started</router-link>
                </div>
            </div>
        </section>
        <section class="section-5 mt-5">
            <div class="row h-100">
                <div class="col-md-3 col-sm-12 col-lg-6 text-right r1 mb-1">
                    <img src="@/assets/images/display-img.png" alt="">
                </div>
                <div class="col-md-6 r2 pl-5 mb-1">
                    <h4>Find flexible, <br>affordable options</h4>
                    <p class="info">Choose from many options including Scheduling <br>your own time to take courses at breakthrough <br>price. Learn at your own pace, 100% online.</p>
                    <div class="btn btn-primary">Schedule Now</div>
                </div>
            </div>
        </section>
        <section class="section-6 mb-5 container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card-layer" style="position: relative;">
                        <div class="cut-out" style="background: #473028;"></div>
                        <div class="card testimonial-card text-center">
                            <img src="@/assets/images/user3.png" class="avatar">
                            <div class="context">
                                <h3 class="author">Jane</h3>
                                <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vitae asperiores sequi amet temporibus culpa eveniet eos inventore, quos placeat?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-layer" style="position: relative;">
                        <div class="cut-out" style="background: #FFCC00;"></div>
                        <div class="card testimonial-card text-center">
                            <img src="@/assets/images/user1.jpg" class="avatar">
                            <div class="context">
                                <h3 class="author">Jane</h3>
                                <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vitae asperiores sequi amet temporibus culpa eveniet eos inventore, quos placeat?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-layer" style="position: relative;">
                        <div class="cut-out" style="background: #9E000A;"></div>
                        <div class="card testimonial-card text-center">
                            <img src="@/assets/images/user2.jpg" class="avatar">
                            <div class="context">
                                <h3 class="author">Jane</h3>
                                <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vitae asperiores sequi amet temporibus culpa eveniet eos inventore, quos placeat?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
export default {
	name: 'Homepage',
	components :{
		Footer ,
		Navbar
	},
}

</script>
<style scoped>
.page{
    overflow: hidden;
}

.section-3{
    /* padding: 30px 100px; */
    margin: 0 auto;
    place-content: center;
    display: flex;
    scroll-snap-type: y mandatory;
}

.section-2, .section-5, .section-6{
    padding: 30px 100px;
    margin: 0 auto;
    place-content: center;
    display: flex;
    scroll-snap-type: y mandatory;
    /* max-height: 430px; */
}

.section-1{
    padding: 10px 100px;
    margin: 0 auto;
    place-content: center;
    display: flex;
}

.section-2{
    background-color: rgba(158, 0, 10, 0.02);
}

.r1 img{
    width: 400px;
    margin: auto;
}

.course-card{
    width: 270px;
    height: 280px;
}

.card-body{
    padding: 10px;
}

.save-course{
    margin: auto;
}

.save-course svg{
    color: rgba(180, 180, 183, 1);
    font-size: 25px;
}

.course-logo{
    width: 119px;
    height: 119px;
    margin-top: -71px;
    margin-left: 125px;
}

.card-img-top{
    height: 45%;
    border-radius: 16px 16px 0 0;
}

.img-1{
    height: 400px;
}

.img-container{
    text-align: end;
}

.c1.title{
    max-width: 70%;
    margin: auto;
}

.c1{
    line-height: 30px;
}

.l1{
    margin: auto;
}

.hero-2{
    scroll-snap-align: start;
    /* width: 870px; */
    text-align: center;
    margin: auto;
}


.overview img{
    width: 55px;
}

.overview .title{
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;
}

.overview .info{
    font-size: 14px;
}

.overlay{
    background-color: #473028e0;
    display: flex;
    place-content: center;
}

.banner-bg{
	background-image:url(../../assets/images/bg-image.png) ;
    background-size: cover;
    background-repeat: no-repeat;
}

.section-4{
    height: 300px;
}

.overlay .content, .content p{
    margin: auto;
}

.r1, .r2{
    margin: auto;
}

.card{
    border: none;
    border-radius: 16px;
    filter: drop-shadow(0px 16px 16px rgba(50, 50, 71, 0.08)) drop-shadow(0px 24px 32px rgba(50, 50, 71, 0.08));
}

.testimonial-card{
    align-items: center;
    padding: 0 20px;
    margin: auto;
    height: 330px;
    width: 300px;
}

.cut-out{
    top: 100px;
    left: -1px;
    position: relative;
    margin: auto;
    width: 287px;
    height: 100px;
    border-radius: 14px 14px 0px 0px;
    transform: rotate(4.68deg);
}

.avatar{
    width: 120px;
    height: 120px;
    border-radius: 100px;
    margin-top: -40px;
    border: 2px solid #fdfdfd00;
}

.context{
    margin-top: 1.5rem;
}
</style>