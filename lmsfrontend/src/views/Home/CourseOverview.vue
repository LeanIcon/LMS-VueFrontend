<template>
    <div class="main-page">
        <Navbar/>
        <section class="content-banner p-5 m-auto text-center mb-5">
            <div class="info-placeholder text-white mx-auto">
                <h5 class="info-1 mt-5">Certification Program</h5>
                <h2 class="info-2 text-title">Agile Scrum Foundation Framework</h2>
                <p class="info-3">
                    upgrade your career Agile Scrum Foundation. Build job-ready skills and credentials to go from beginner to job ready in about 5 months. No degree or prior experience required.
                </p>
                <table id="customers" class="mx-auto mt-4">
                    <tr>
                        <th class="d1">Estimated Time</th>
                        <th class="d1">Enroll By</th>
                        <th class="d1">Prerequisites</th>
                    </tr>
                    <tr>
                        <td class="d2">August 18, 2021</td>
                        <td class="d2">None</td>
                        <td class="d2">6 weeks</td>
                    </tr>
                    <tr>
                        <td class="d3">At 10 hrs/week</td>
                        <td class="d3">Get access to classroom immediately on enrollment</td>
                        <td class="d3">See prerequisites in detail</td>
                    </tr>
                </table>
                <div class="btn btn-primary mt-4" style="width: 250px;">Start for free trial</div>
            </div>
        </section>

        <div class="spacer-sm"></div>

        <section class="container">
            <h3>About this course</h3>
            <p>This course provides a broad overview of the fundamental concepts, principles, and practices of mindfulness. With interactive exercises to help students explore their own attitudes, mental habits and behaviors, Foundations of Mindfulness offers a pathway for living with more freedom, authenticity and ease. Featured components of the course include experiential exercises, guided meditations, personal reflection and interactive discussions.</p>
            
            <div class="spacer-sm"></div>

            <div class="card card-shadow p-5">
                <h5 class="title">Learning Goals</h5>
                <div class="bullets mt-3 row">
                    <div class="list-1 col">
                        <ul>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Apply Agile development practices in your work</p>
                            </li>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Creating a vibrant culture to foster innovation</p>
                            </li>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Overview of XP, DevOps and other frameworks</p>
                            </li>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Instilling a culture of relentless improvement</p>
                            </li>
                        </ul>
                    </div>
                    <div class="list2 col">
                        <ul>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Aligning culture with business model </p>
                            </li>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Know all scrum team roles and how to manage dependencies</p>
                            </li>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">To foster team transparency and accountability</p>
                            </li>
                            <li class="d-flex mb-3">
                                <div class="list-item mr-2 d-flex text-center">
                                    <i class="fa fa-arrow-right"></i>
                                </div>
                                <p class="my-auto">Planning and executing the Iteration/Sprints</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col my-auto">
                        <div class="btn btn-primary dwn-btn">Download Syllabus</div>
                    </div>
                    <div class="col skills">
                        <p class="text-uppercase font-weight-normal" style="line-height: 0px;">Skills you will gain</p>
                        <div class="skill-inputs d-flex">
                            <div class="blnk mr-3"></div>
                            <div class="blnk mr-3"></div>
                            <div class="blnk mr-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="spacer-sm"></div>

            <div class="instructors mt-5">
                <h5 class="title font-weight-bold">Instructors</h5>
                <div class="row mt-4">
                    <Instructor class="col"/>
                    <Instructor class="col"/>
                </div>
            </div>

            <div class="spacer-sm"></div>
            <hr>

            <div class="plan_pricing text-center mx-auto mt-5">
                <p class="info-1">PLAN & PRICING</p>
                <h3>Build skills that deliver results </h3>
                <div class="d-flex" style="place-content: center;">
                    <p class="font-weight-bold">Bill Monthly</p>
                    <label class="switch mx-3">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                    <p class="font-weight-normal">Bill Anually</p>
                </div>

                <div class="spacer-xs"></div>

                <div class="pricing-table d-flex" style="place-content: center;">
                    <div class="card card-shadow std-card p-5">
                        <h4 class="title">Standard</h4>
                        <p class="price-tag font-weight-bold">$29</p>
                        <p class="info" style="height: 60px">Start learning today! Get maximum flexibility to learn at your own pace.</p>
                        <!-- <div class="btn btn-primary e-btn mx-auto mt-4">Enroll Now</div> -->
                        <router-link :to="{'name': 'Register'}" tag="div" class="btn btn-primary e-btn mx-auto mt-4">Enroll Now</router-link>
                        <p class="info mt-4">Or start a free trial</p>
                    </div>
                    <div class="card card-shadow prm-card text-white p-5">
                        <h4 class="title">Premium</h4>
                        <p class="price-tag font-weight-bold">$59</p>
                        <p class="info" style="height: 60px"> Entire library of core and expanded courses, exams, projects and hands-on learning. </p>
                        <!-- <div class="btn btn-primary e-btn mx-auto mt-4">Enroll Now</div> -->
                        <router-link :to="{'name': 'Register'}" tag="div" class="btn btn-primary e-btn mx-auto mt-4">Enroll Now</router-link>
                        <p class="info mt-4">Or start a free trial</p>
                    </div>
                </div>

                <div class="spacer-md"></div>
                <!-- <div class="client-section mt-5">
                    <h5 class="font-weight-bold">Trusted by learners at thousands of companies</h5>
                    <img src="@/assets/images/clients.png" alt=""> 
                </div> -->

            </div>
        </section>
        <div class="cta mt-5 d-flex" style="place-content: center;">
            <!-- <div class="btn btn-primary m-auto">Enroll Now</div> -->
        <router-link :to="{'name': 'Register'}" tag="div" class="btn btn-primary m-auto">Enroll Now</router-link>
        </div>
        <Footer/>
    </div>
</template>


<script>
    import Footer from '@/components/Footer.vue'
    import Navbar from '@/components/Navbar.vue'
    import Instructor from '@/components/misc/Instructor.vue'
    
    export default {
        name: 'CourseOverview',
        components :{
            Footer ,
            Navbar,
            Instructor
        },
    }
</script>

<style scoped>
.m-content{
    padding: 0 10rem;
    background: url(../../assets/images/resource2.png);
    background-size: contain;
}

.content-banner{
    background: url(../../assets/images/coursebanner.png);
    /* background-image: url(../../assets/images/coursebanner.png); */
    background-size:100% 100%;
    background-repeat: no-repeat;
    height: 500px;
    width: 100%;
}

.info-placeholder{
    width: 650px;
}

th, td{
    vertical-align: text-top;
    /* padding: 0 5px; */
    text-align: left;
    width: 180px;
    border-left: 1px solid white;
    padding-left: 15px;
}

.d3{
    font-size: 13px;
}

.d2{
    font-size: 18px;
}

.card-shadow{
    width: 100%;
    /* height: 300px; */
    background-color: #F6F6F6;
    padding: 20px;
}

.list-item{
    height: 27px;
    width: 27px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    align-items: center;
    place-content: center;
}

.dwn-btn{
    width: 270px;
}

.blnk{
    width: 143px;
    height: 28px;
    background-color: #C4C4C4;
    border-radius: 16px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 20px;
}

.switch input { 
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 0px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #473028;
}

input:focus + .slider {
    box-shadow: 0 0 1px #473028;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.prm-card{
    max-width: 400px !important;
    background-color: rgb(43, 43, 43);
}

.std-card{
    max-width: 400px !important;
}

.price-tag{
    font-size: 64px;
}

.client-section img{
    width: 80%;
}

.e-btn{
    width: 200px;
}

.cta{
    background: url(../../assets/images/cta.png) no-repeat;
    height: 270px;
    background-size: cover;
    text-align: center;
}

.cta .btn{
    width: 270px;
}
</style>