<template>
    <div class="page main">
        <Navbar/>
        <!-- BLOCK 1 -->
        <section class="section-1">
            <div class="row">
                <div class="col-md-6 l1 px-5 m-auto">
                    <h2 class="banner-title">Take Control of Your Career</h2>
                    <p class="info">Whether you want to transition into a new field, improve in your role or bring your big ideas to life, our courses helps you build skills to add to your resume with unlimited Guided Projects.</p>
                    <p class="mt-3 banner-info">Enter your email to get started</p>
                    <p class="mt-3 banner-info">Ensure the address is correct before submitting. You will be required to verify your address before joining the program.</p>
                    <input type="email" name="email" id="email" placeholder="Your email address" class="text-center">
                    <router-link :to = "{ name:'Dashboard' }" class="btn btn-primary btn-inline" tag="div">Start</router-link>
                </div>
                <div class="col-md-6 img-container">
                    <img src="@/assets/images/banner21.png" class="img-1" alt="">
                </div>
            </div>
        </section>
        
        <!-- BLOCK 2 -->
        <section class="section-2">
            <div class="row h-100 w-100">
                <div class="col-md-6 r2 px-5">
                    <h4>Acquire in-demand skills quickly</h4>
                    <ul>
                        <li class="d-flex mb-3">
                            <div class="list-item mr-2 d-flex text-center">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                            <p class="my-auto">Learn from top instructors</p>
                        </li>
                        <li class="d-flex mb-3">
                            <div class="list-item mr-2 d-flex text-center">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                            <p class="my-auto">Gain skills through hands-on learning</p>
                        </li>
                        <li class="d-flex mb-3">
                            <div class="list-item mr-2 d-flex text-center">
                                <i class="fa fa-arrow-right"></i>
                            </div>
                            <p class="my-auto">Earn and share a valued certificate</p>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 text-center r1 px-5">
                    <img src="@/assets/images/resource1.png" alt="">
                </div>
            </div>

            <!-- BLOCK 3 -->
            <TrendingCourses title="Trending now on LittLearn" title_info="" />

            <!-- BLOCK 4 -->
            <div class="row px-5 mt-5">
                <div class="col-6">
                    <p class="info font-weight-bold text-center">Get started today, you are in <br>control of your own career.</p>
                </div>
                <div class="col-6">
                    <div class="btn btn-primary" style="width: 300px;">Start for free</div>
                </div>
            </div>

            <!-- BLOCK 5 -->
            <section class="section-3 mt-5">
                <div class="testimonial row px-5">
                    <div class="col-lg-4 user-avatar d-flex">
                        <img src="@/assets/images/user-bg.png" alt="" class="bg1">
                        <img src="@/assets/images/user4.png" alt="user" class="avatar" style="z-index: 100;">
                        <img src="@/assets/images/user-bg.png" alt="" class="bg2">
                    </div>
                    <div class="col-lg-8 my-auto p-5">
                        <p class="info">I was able to apply to an internship because of a new skill I developed with a LittLearn course! It may be a small step for some people, but before, I wasn't even able to apply, and now, I have opened many doors for my professional future!</p>
                        <p class="author font-weight-bold">- Gloria</p>
                    </div>
                </div>
            </section>
        </section>

        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import TrendingCourses from '@/components/misc/TrendingCourses.vue'
export default {
	name: 'Individuals',
	components :{
		Footer,
		Navbar,
        TrendingCourses
	},
}
</script>

<style scoped>

section{
    padding: 5rem 100px;
    margin: 0 auto;
}

.section-1{
    place-content: center;
    display: flex;
}

.img-1{
    height: 250px;
}

.banner-title{
    font-weight: 600;
    font-size: 2.1rem;
}

.banner-info{
    font-weight: 600;
    font-size: 12px;
}

.section-2{
    background: rgba(158, 0, 10, 0.02);
    background-image: url("../../assets/images/resource2.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* opacity: 0.75; */
}

.img-container{
    text-align: center;
}

input{
    height: 50px;
    background-color: #F4F4F4;
    border: none;
    border-radius: 7px 0 0 7px;
    width: 280px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

input:focus{
    outline: none;
    border: none;
}

.btn-inline{
    height: 50px;
    border-radius: 0 7px 7px 0;
    padding: 10px;
    width: 100px;
    border: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

::placeholder{
    color: #9C8E8E;
}

.r1 img{
    width: 350px;
}

ul li{
    list-style: none;
}

.list-item{
    height: 30px;
    width: 30px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    align-items: center;
    place-content: center;
}

.user-avatar{
    max-width: 250px;
    height: 250px;
}

.bg1{
    float: right;
    position: absolute;
    left: 70%;
    width: 80px;
}

.bg2{
    position: absolute;
    bottom: 2%;
    left: 8%;
    width: 80px;
}
</style>