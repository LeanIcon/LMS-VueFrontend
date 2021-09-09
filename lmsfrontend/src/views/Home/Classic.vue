<template>
    <div class="_page">
        <div class="container h-100">
            <div class="_content h-100">
                <div class="navbar">
                    <div class="logo">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <router-link :to="{'name': 'Signin'}" class="btn btn-primary" tag="div">Login</router-link>
                    <!-- <div class="btn btn-primary">Login</div> -->
                </div>
                <div class="row section">
                    <div class="col-9 col-md-6 col-sm-8 col-lg-6 _c1 d-flex">
                        <div class="_intro-text">
                            <p class="_t1">Take Unlimited</p>
                            <p class="_t2">Practice Exams</p>
                        </div>
                        <div class="spacer-2x"></div>
                        <div class="sub_text mr-5">
                            <p>Get rid of exam nerves long before you have to do the real thing. You can take as many practice exams as you need to feel confident heading into exam day.</p>
                        </div>
                        <div class="spacer-2x"></div>
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xl-4 col-lg-6 col-12">
                                <router-link :to="{'name': 'Register'}" class="btn btn-primary bt_md" tag="div">
                                    Get Started
                                </router-link>
                                <!-- <div class="btn btn-primary bt_md">
                                    Get Started
                                </div> -->
                            </div>
                            <div class="col-md-6 col-sm-6 col-xl-8 col-lg-6 col-12 video-btn d-flex">
                                <img src="@/assets/images/play-circle.png" alt="v-btn" class="my-auto mx-1">
                                <p class="my-auto">Watch Video</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 col-md-6 col-sm-4 col-lg-6 cl-2">
                        <div class="_hero-banner  w-100 h-100">
                            <img src="@/assets/images/banner3.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Classic'
}
</script>

<style scoped>
._page{
    background-color: #F1F2F4;
    /* width: 100%; */
    height: 100vh;
    overflow: hidden;
}

.cl-2{
    height: calc(100vh - 11%);
}

.logo img{
    width: 120px;
}

.navbar{
    padding-top: 2rem;
}

.navbar .btn{
    border-radius: 50px;
    height: 30px;
    line-height: 1;
    font-size: 14px;
    width: 110px;
}

._intro-text ._t1{
    font-weight: 200;
    font-size: 60px;
    line-height: .9;
    width: 400px;
    margin-bottom: 4px;
}

._intro-text ._t2{
    line-height: .9;
    font-size: 60px;
    font-weight: 600 !important;
}

.section{
    padding: 0 1rem;
    /* margin-top: -3rem; */
    height: 90%;
}

.navbar{
    height: 10%;
}

._c1{
    /* height: 530px; */
    place-content: center; 
    flex-direction: column;
}

._hero-banner img{
    /* width: 500px; */
    margin-top: -1rem;
    height: 100vh;
}

.sub_text{
    font-size: 20px;
}

.btn-primary{
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25) !important;
}

.bt_md{
    border-radius: 50px;
    height: 50px;
    line-height: 2.5;
    font-size: 15px;
    width: 100% !important;
}

.video-btn img{
    width: 25px;
    height: 25px;
}

@media screen and (max-width: 600px){
    ._c1{
        /* max-width: 500rem !important; */
        place-content: inherit;
        height: calc(100vh - 7rem);
    }

    ._hero-banner img{
        width: 450px;
        margin-top: 3.5rem;
        margin-left: -12rem;
    }

    .section{
        padding: 0;
    }

    ._intro-text{
        margin-top: 2.5rem;
    }

    .bt_md{
        width: 150px !important;
    }

    .video-btn{
        position: absolute;
        bottom: 80px;
    }

    .spacer-2x{
        height: 10px;
    }

    ._intro-text ._t1,
    ._intro-text ._t2{
        line-height: 1.1;
        font-size: 38px;
        margin-bottom: 2px;
    }
}
</style>